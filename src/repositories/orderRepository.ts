import prismaClient from '../db/prismaClient';

const prisma = prismaClient.prisma;
export const addOrder = (userId: number, bookId: number) => {
    return prisma.order.create({
        data: {
            userId,
            bookId,
        },
    });
};

export const getOrdersByUserId = (userId: number) => {
    return prisma.order.findMany({
        where: { userId },
    });
};

export const cancelOrder = (orderId: number) => {
    return prisma.order.delete({
        where: { id: orderId },
    });
};


export const allOrder = () => {
    return prisma.order.findMany({
        include: { user: true }
    });
}