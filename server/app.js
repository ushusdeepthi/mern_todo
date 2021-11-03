import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import itemsRouter from './routes/items.js'
import indexRouter from './routes/index.js'

const app=express();

dotenv.config() // configuring the dotenv file

//middlewares

app.use(cors());
app.use(express.json())

//routes
app.use('/api', indexRouter)
app.use('/api/items', itemsRouter)

//db connection
const port = process.env.PORT || 8000;
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>app.listen(port,()=> console.log(`Server running on port ${port}`)))
.catch((error)=> console.log(error.message))
