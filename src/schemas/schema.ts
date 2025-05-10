import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Movie {
    id: ID!,
    title: String!,
    year: Int!,
    genre: String!
  }

  input MovieInput {
    title: String,
    year: Int,
    genre: String
  }

  type Query {
    movies: [Movie],
    movie(id: Int!): Movie,
    moviesByGenre(genre: String!): [Movie]
  }

  type Mutation {
    addMovie(movie: MovieInput!): Movie!
  }
`);
