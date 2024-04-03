import express from 'express';
import * as orderController from '../controllers/orderController';
import { accessValidation } from '../services/authService';

const router = express.Router();

router.get('/list-of-buy', accessValidation, orderController.listOfBuy);
router.post('/order', accessValidation, orderController.createOrder);
router.delete('/order/:orderId', accessValidation, orderController.cancelOrder);

export default router;