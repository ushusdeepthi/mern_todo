import Todo from '../models/todoList.js'

export const getTodoList = async (req,res)=>{
    try{
        const todoList = await Todo.find();
        console.log(todoList);
        res.status(200).json(todoList);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createTodoItem = async (req,res)=>{
    const {title,body} = req.body
    const newItem = new Todo({title, body})
    try{
        await newItem.save();

        res.status(201).json(newItem)
    }
    catch(error){
        res.status(409).json({message:error.message})
    }
}
export const deleteTodoItem = async (req,res)=>{
    try{
        await Todo.findByIdAndRemove(req.params.id);
        res.json({ message: "Post deleted successfully." })
    }
    catch(error){
        res.json({message:error.message})
    }
}
