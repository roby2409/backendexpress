import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/userEntity';
interface ValidationRequest extends Request {
    userData: User
}


export const accessValidation = (req: Request, res: Response, next: NextFunction) => {
    const validationReq = req as ValidationRequest
    const { authorization } = validationReq.headers;

    if (!authorization) {
        return res.status(401).json({
            message: 'need a token access'
        })
    }

    const token = authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET!;

    try {
        const jwtDecode = jwt.verify(token, secret);

        if (typeof jwtDecode !== 'string') {
            validationReq.userData = jwtDecode as User
        }
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
    next()
}
