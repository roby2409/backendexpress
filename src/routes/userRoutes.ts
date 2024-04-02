import express from 'express';
import * as userController from '../controllers/userController';
import { accessValidation } from '../services/authService'
const router = express.Router();

router.get('/list-of-user', accessValidation, userController.listOfUsers);
router.get('/user/:id', accessValidation, userController.userById);
router.put('/user/:id', accessValidation, userController.updateUser)
router.post('/user', accessValidation, userController.addNewUser)
router.delete('/user/:id', accessValidation, userController.deleteUser)


export default router;