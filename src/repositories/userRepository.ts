import prismaClient from '../db/prismaClient';
import { User } from '../entities/userEntity'
import bcrypt from 'bcrypt';
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

export const findUserByEmail = (email: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            email: email
        }
    });
};


export const updateUser = async (id: number, data: Record<string, any>) => {
    const { password, ...restData } = data;
    const updateData: Record<string, any> = { ...restData };

    if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updateData.password = hashedPassword;
    }

    return prisma.user.update({
        where: { id },
        data: updateData,
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