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

export const getUserPoints = async (id: number): Promise<Number | undefined> => {
    const user = await userRepository.findUserById(id)
    return user?.point;
}

export const createNewUser = async (name: string) => {
    return userRepository.addUser(name)
}

export const removeUser = async (id: number) => {
    return userRepository.deleteUser(id)
}