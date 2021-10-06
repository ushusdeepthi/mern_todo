import Todo from '../models/todoList.js'

export const createTodoItem = async (req,res)=>{
    const {title,body} = req.body
    const newItem = new Todo({title, body} );
    try{
        await newItem.save();

        res.status(201).json(newItem);
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
}
