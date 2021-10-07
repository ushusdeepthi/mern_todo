import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    register_date:{
        type:Date,
        default:new Date
    },
});

const User = mongoose.model('user', UserSchema)

export default User;