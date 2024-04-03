import { allBooks, addBook, getBookById } from '../repositories/bookRepository';

export const listBooks = () => {
    return allBooks();
}

export const createNewBook = async (
    title: string,
    writer: string,
    tags: string[]
) => {
    return addBook(title, writer, tags)
}


export const getBookPoints = async (id: number): Promise<Number | undefined> => {
    const user = await getBookById(id)
    return user?.point;
}