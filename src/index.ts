import cors from 'cors';
import express, { Request, Response } from "express";
import createError from "http-errors"
import userRoutes from './routes/userRoutes';
import bookRoutes from './routes/bookRoutes';
import { login } from '../src/controllers/authController';

const app = express()

// Allow requests from all origins
app.use(cors());

app.use(express.json());
app.use('/login', login);
app.use(userRoutes);
app.use(bookRoutes);


// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
    next(createError(404))
})

app.listen(3000, () =>
    console.log(`⚡️[server]: Server is running at http://localhost:3000`)
)