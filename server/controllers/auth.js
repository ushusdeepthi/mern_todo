import dotenv from "dotenv"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'



dotenv.config() ;

export const registerUser = (req,res)=>{
    const {name,email,password} = req.body;
    //simple validation
    if(!name || !email || !password){
        return res.status(400).json({message:'Please enter all the fields'});
    }

    //check for existing user
    User.findOne({email:email})
        .then(user =>{
            if(user) return res.status(400).json({message:'User already exists'})
            const newUser = new User({
                name,
                email,
                password
            })
            //create salt and hash
            bcrypt.genSalt((err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user =>{
                            jwt.sign(
                                {id:user._id},
                                process.env.ACCESS_TOKEN_SECRET,
                                { expiresIn:3600},
                                (err,token)=>{
                                    if(err) throw err;                                    
                                    res.status(200).json({
                                        token,
                                        user:{
                                            id: user._id,
                                            name:user.name,
                                           email:user.email
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        });
}

export const loginUser = (req,res)=>{
    const {email,password} = req.body;
    //simple validation
    if(!email || !password){
        return res.status(400).json({message:'Please enter all the fields'});
    }

    //check for existing user
    User.findOne({email:email})
        .then(user =>{
            if(!user) return res.status(400).json({message:'User does not exist'})

            //validate password
            bcrypt.compare(password,user.password)
                .then(isMatch=>{
                    if(!isMatch) return res.status(400).json({'message':'Invalid credentials'})
                    jwt.sign(
                                {id:user._id},
                                process.env.ACCESS_TOKEN_SECRET,
                                { expiresIn:3600},
                                (err,token)=>{
                                    if(err) throw err;                                    
                                    res.status(200).json({
                                        token,
                                        user:{
                                            id: user._id,
                                            name:user.name,
                                           email:user.email
                                        }
                                    })
                                }
                            )
                })
        })
}

