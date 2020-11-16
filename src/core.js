import {DEFAULT_MOVIES_FILTER_VALUE} from './const';

export const filterMoviesByGenre = (allMovies, genre) => {
  return genre === DEFAULT_MOVIES_FILTER_VALUE ?
    allMovies :
    allMovies.filter((movie) => movie.genre === genre);
};

export const filterSimilarMovies = (allMovies, movie) => {
  const similarMovies = allMovies.filter((it) => it.genre === movie.genre && it.id !== movie.id);

  return similarMovies.slice(0, 4);
};
