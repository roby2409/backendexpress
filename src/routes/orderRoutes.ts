import express from 'express';
import * as orderController from '../controllers/orderController';

const router = express.Router();

router.get('/list-of-buy', orderController.listOfBuy);
router.post('/order', orderController.createOrder);
router.get('/order/:userId', orderController.listOrdersByUserId);
router.delete('/order/:orderId', orderController.cancelOrder);

export default router;