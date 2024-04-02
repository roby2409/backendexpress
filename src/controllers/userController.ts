import { Request, Response } from 'express';
import { listUsers, updateUserData, getUserById, createNewUser, removeUser } from '../services/userService';

export const listOfUsers = async (req: Request, res: Response) => {
    const orders = await listUsers();
    res.status(200).json(orders);
}

export const userById = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await getUserById(Number(id));
    res.status(200).json(user);
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedPost = await updateUserData(Number(id), req.body);
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

export const addNewUser = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const result = await createNewUser(name);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}


export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const result = await removeUser(Number(id));
        res.json({ success: `success delete user ${result.name}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete user' });
    }

}