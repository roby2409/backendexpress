import express from 'express';
import * as bookController from '../controllers/bookController';

const router = express.Router();

router.get('/list-of-books', bookController.listOfBooks);
router.post('/book', bookController.addNewBook)

export default router;