import prismaClient from '../db/prismaClient';
import { User } from '../entities/userEntity'
const prisma = prismaClient.prisma;

export const addUser = (
    name: string,
    email: string,
    address: string,
    password: string,
) => {
    return prisma.user.create({
        data: {
            name,
            email,
            address,
            password,
            point: 100,
        },
    });
};

export const findUserById = (id: number): Promise<User | null> => {
    return prisma.user.findUnique({
        where: { id },
    });
};


export const updateUser = (id: number, data: Record<string, any>) => {
    return prisma.user.update({
        where: { id: id },
        data: { ...data },
    });
};

export const allUsers = () => {
    return prisma.user.findMany();
}

export const deleteUser = (userId: number) => {
    return prisma.user.delete({
        where: { id: userId },
    });
};