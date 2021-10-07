import User from '../models/user.js'

export const getUsers= async (req,res)=>{
    User.find()
        .then(users=>{
            if(!users) return res.status(400).json({'message': 'No user exists'})
            res.status(200).json(users)
        })
}



