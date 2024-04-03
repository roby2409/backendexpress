import { allBooks, addBook, getBookById } from '../repositories/bookRepository';

export const listBooks = () => {
    return allBooks();
}

export const createNewBook = async (
    title: string,
    writer: string,
    tags: string[],
    point?: number,
) => {
    return addBook(title, writer, tags, point)
}


export const getBookPoints = async (id: number): Promise<Number> => {
    const book = await getBookById(id)
    return book?.point ?? 0;
}