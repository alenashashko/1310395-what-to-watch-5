import {DEFAULT_MOVIES_FILTER_VALUE} from './const';

export const filterMoviesByGenre = (allMovies, genre) => {
  return genre === DEFAULT_MOVIES_FILTER_VALUE ?
    allMovies :
    allMovies.filter((movie) => movie.genre === genre);
};
