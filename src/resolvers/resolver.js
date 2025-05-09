import { books } from "../models/model.js";

export const resolver = {
  // Query
  books: () => books,
  book: ({ id }) => books.find((book) => book.id === id),
  booksByGenre: ({ genre }) => books.filter((book) => book.genre === genre),

  // Mutation
  addBook: (book) => {
    const newBook = { ...book, id: books.length + 1 };
    books.push(newBook);
    return newBook;
  },
};
