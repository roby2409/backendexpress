import { Request, Response } from 'express';
import * as orderService from '../services/orderService';
import * as bookService from '../services/bookService';
import * as userService from '../services/userService';
import { ValidationRequest } from '../services/authService';

export const listOfBuy = async (req: Request, res: Response) => {
    const userId = (req as ValidationRequest).userData.id;
    const page = parseInt(req.query.page as string) || 1;
    const perPage = parseInt(req.query.perPage as string) || 10;

    const orders = await orderService.listOrdersByUserId(userId, page, perPage);
    res.status(200).json(orders);
}

export const createOrder = async (req: Request, res: Response) => {
    const userId = req.body.userId;
    const bookId = req.body.bookId;

    // Retrieve user points from the database or some other source
    const userPoints = await userService.getUserPoints(Number(userId));

    // Retrieve book points from the database or some other source
    const bookPoints = await bookService.getBookPoints(bookId);

    if (userPoints >= bookPoints) {
        // Deduct points from user and create order
        const resultDeductsPoints = await userService.deductPoints(userId, bookPoints);
        await orderService.createOrder(userId, bookId);
        res.status(201).json(resultDeductsPoints);
    } else {
        res.status(400).json({ message: 'Not enough points to buy the book' });
    }
}

export const cancelOrder = async (req: Request, res: Response) => {
    const orderId = parseFloat(req.params.orderId);
    const success = await orderService.cancelOrder(orderId);
    res.status(201).json(success);
};

