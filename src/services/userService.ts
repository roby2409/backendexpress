import { User } from '../entities/userEntity';
import * as userRepository from '../repositories/userRepository';

export const listUsers = () => {
    return userRepository.allUsers();
}

export const updateUserData = (id: number, data: Record<string, any>) => {
    const updatedPost = userRepository.updateUser(id, data);
    return updatedPost;
};

export const getUserById = async (id: number) => {
    const user = await userRepository.findUserById(id)
    return user
}

export const getUserByEmail = async (email: string) => {
    const user = await userRepository.findUserByEmail(email)
    return user
}

export const getUserPoints = async (id: number): Promise<number> => {
    const user = await userRepository.findUserById(id)
    return user?.point ?? 0;
}

export const updatePoints = async (userId: number, pointToUpdate: number) => {
    const user = await userRepository.findUserById(userId)
    const updatedUser = { ...user, points: pointToUpdate };
    return userRepository.updatePoints(userId, updatedUser.points);
}

export const createNewUser = async (
    name: string,
    email: string,
    address: string,
    password: string,
) => {
    return userRepository.addUser(
        name,
        email,
        address,
        password,
    )
}

export const removeUser = async (id: number) => {
    return userRepository.deleteUser(id)
}