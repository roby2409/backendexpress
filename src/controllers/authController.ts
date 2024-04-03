import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../services/userService';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
        return res.status(422).json({
            email: [
                'email not found'
            ]
        })
    }

    if (!user.password) {
        return res.status(422).json({
            password: [
                'Password not set'
            ]
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)


    if (isPasswordValid) {
        const payload = {
            id: user.id,
            name: user.name,
            address: user.address
        }

        const secret = process.env.JWT_SECRET!;

        const expiresIn = 60 * 60 * 1;

        const token = jwt.sign(payload, secret, { expiresIn: expiresIn })


        return res.json({
            user: user,
            token: token
        })
    } else {
        return res.status(422).json({
            password: [
                'You have wrong password'
            ]
        })
    }
};
