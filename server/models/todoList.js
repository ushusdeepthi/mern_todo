import mongoose from 'mongoose';

const TodoSchema = mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    body:{
        type: String,
        required:true,
    },
    completed:{
        type:Boolean,
        default: false,
    },
    createdAt:{
        type:Date,
        default:new Date
    },
});

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo;