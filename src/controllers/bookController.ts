import { Request, Response } from 'express';
import { listBooks, createNewBook } from '../services/bookService';

export const listOfBooks = async (req: Request, res: Response) => {
    const orders = await listBooks();
    res.status(200).json(orders);
}

export const addNewBook = async (req: Request, res: Response) => {
    const { title, writer, tags, point } = req.body;
    try {
        const result = await createNewBook(title, writer, tags, point);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}