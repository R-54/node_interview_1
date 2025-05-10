import { GraphQLError } from "graphql";
import { movies } from "../models/model";
import { randomUUID } from "crypto";

export const resolver = {
  // Query
  movies: () => movies,
  movie: ({ id }) => movies.find((movie) => movie.id === id),
  moviesByGenre: ({ genre }) => movies.filter((movie) => movie.genre === genre),

  // Mutation
  addMovie: ({ movie }) => {
    if (!movie.title || movie.year || movie.genre) {
      throw new GraphQLError("Missing params");
    }
    const newMovie = { ...movie, id: randomUUID() };
    movies.push(newMovie);
    return newMovie;
  },
};
