import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Book {
    id: ID,
    title: String,
    author: String,
    genre: String,
    year: Int
  }

  type Query { 
    books: [Book],
    book(id: Int!): Book,
    booksByGenre(genre: String!): [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, genre: String!, year: Int!): Book
  }
`);
