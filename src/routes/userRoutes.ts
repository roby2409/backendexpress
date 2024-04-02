import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/list-of-user', userController.listOfUsers);
router.get('/user/:id', userController.userById);
router.put('/user/:id', userController.updateUser)
router.post('/user', userController.addNewUser)
router.delete('/user/:id', userController.deleteUser)


export default router;