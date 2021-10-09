import express from 'express'
import {auth} from '../controllers/auth.js'
import { getTodoList, getTodoItem, createTodoItem, deleteTodoItem } from '../controllers/items.js'

const router = express.Router();

router.get('/',auth, getTodoList);
router.get('/:id',auth, getTodoItem);
router.post('/', auth, createTodoItem);
router.delete('/:id',auth, deleteTodoItem);

export default router;