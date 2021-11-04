import dotenv from "dotenv"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'



dotenv.config() ;

export const registerUser = (req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message:'Please enter all the fields'});
    }

    User.findOne({email:email})
        .then(user =>{
            if(user) return res.status(400).json({message:'User already exists'})
            const newUser = new User({
                name,
                email,
                password
            })

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

    if(!email || !password){
        return res.status(400).json({message:'Please enter all the fields'});
    }


    User.findOne({email:email})
        .then(user =>{
            if(!user) return res.status(400).json({message:'User does not exist'})

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


export const getSingleUser = (req,res)=> {
    User.findById(req.user.id)
    .select('-password')
        .then(user=>{
            if(!user) return res.status(400).json({'message': 'User does not exist'})
            res.status(200).json(user)
        })
}

export const auth = (req,res,next)=> {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.status(401).json({message:' Authorization denied'})

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.status(403).json({'message':'Access denied'})
        req.user=user
        next()
    });
}
