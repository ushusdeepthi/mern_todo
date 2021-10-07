import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import itemsRouter from './routes/items.js'
import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app=express();

dotenv.config() // configuring the dotenv file

//middlewares

app.use(cors());
app.use(express.json())

//routes
app.use('/api', indexRouter)
app.use('/api/items', itemsRouter)
app.use('/api/users', usersRouter)

//db connection
const port = process.env.PORT || 8000;
mongoose.connect('mongodb://localhost:27017/mern-todo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>app.listen(port,()=> console.log(`Server running on port ${port}`)))
.catch((error)=> console.log(error.message))
