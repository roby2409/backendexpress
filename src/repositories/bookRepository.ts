import prismaClient from '../db/prismaClient';
import { Book } from '../entities/bookEntity';

const prisma = prismaClient.prisma;

export const addBook = (
    title: string,
    writer: string,
    tags: string[],
    point?: number
) => {
    const randomPoint = point ?? Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    return prisma.book.create({
        data: {
            title,
            writer,
            coverImage: "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg",
            tags,
            point: randomPoint
        },
    });
};

export const getBookById = (id: number): Promise<Book | null> => {
    return prisma.book.findUnique({
        where: { id },
    });
};

export const updateBook = (id: number, data: Record<string, any>) => {
    return prisma.book.update({
        where: { id: id },
        data: { ...data },
    });
};

export const allBooks = () => {
    return prisma.book.findMany();
}