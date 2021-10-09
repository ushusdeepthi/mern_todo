import Todo from '../models/todoList.js'

export const getTodoList = async (req,res)=>{
    try{
        const todoList = await Todo.find({user: req.user.id});
        console.log(todoList);
        console.log(`user: ${req.user.id}`);
        res.status(200).json(todoList);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getTodoItem = async (req,res)=>{
    try{
        const todoItem = await Todo.findOne({_id:req.params.id, user :req.user.id});
        if(!todoItem) return res.status(404).json({message: error.message})
        res.status(200).json(todoItem);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createTodoItem = async (req,res)=>{
    const {title,body} = req.body
    const newItem = new Todo({title, body, user : req.user.id} );
    try{
        await newItem.save();

        res.status(201).json(newItem);
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
}

export const updateTodoItem = async (req,res)=>{
    const {title, body } = req.body
    const filter = {_id:req.params.id, user :req.user.id}
    const update = {title, body}
    try{
        const updateItem = await Todo.findOneAndUpdate(filter, update,{ new: true });
        if(!updateItem) return res.status(404).json({message: error.message})
        res.status(201).json({ updateItem });
    }
    catch(error){
        res.json({message:error.message});
    }
}

export const deleteTodoItem = async (req,res)=>{
    try{
        await Todo.findOneAndDelete({_id:req.params.id, user :req.user.id});
        res.json({ message: "Post deleted successfully." });
    }
    catch(error){
        res.json({message:error.message});
    }
}