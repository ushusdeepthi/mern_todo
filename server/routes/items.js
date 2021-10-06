import express from 'express'
import { createTodoItem,} from '../controllers/items.js'

const router = express.Router();

router.post('/', createTodoItem);