import express from 'express'
import { getTodoList,createTodoItem,deleteTodoItem } from '../controllers/items.js'

const router = express.Router();

router.get('/', getTodoList);
router.post('/',  createTodoItem);
router.delete('/:id', deleteTodoItem);

export default router;