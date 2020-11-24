import {createSelector} from 'reselect';
import {filterMoviesByGenre} from '../core';

export const getGenre = (state) => {
  return state.APP.genre;
};

export const getMovies = (state) => {
  return state.DATA.movies;
};

export const getCurrentMovie = (state) => {
  return state.DATA.currentMovie;
};

export const getFavoriteMovies = (state) => {
  return state.DATA.favoriteMovies;
};

export const getPromoMovie = (state) => {
  return state.DATA.promoMovie;
};

export const getGenreMovies = createSelector(getMovies, getGenre, (movies, genre) => {
  return filterMoviesByGenre(movies, genre);
});
