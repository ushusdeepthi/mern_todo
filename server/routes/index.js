import express from 'express'
import {auth, registerUser,loginUser,getSingleUser} from '../controllers/auth.js'


const router = express.Router();

router.post('/register', registerUser );
router.post('/login', loginUser );
router.get('/user',auth, getSingleUser)


export default router;