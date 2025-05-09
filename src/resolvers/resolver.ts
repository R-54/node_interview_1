import { books } from "../models/model.js";

export const resolver = {
  // Query
  books: () => books,
  book: ({ id }: { id: number }) => books.find((book) => book.id === id),
  booksByGenre: ({ genre }: { genre: string }) =>
    books.filter((book) => book.genre === genre),

  // Mutation
  addBook: (book: {
    title: string;
    author: string;
    genre: string;
    year: number;
  }) => {
    const newBook = { ...book, id: books.length + 1 };
    books.push(newBook);
    return newBook;
  },
};
