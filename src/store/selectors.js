import {createSelector} from 'reselect';
import {filterMoviesByGenre, filterSimilarMovies} from '../core';

export const getGenre = (state) => {
  return state.APP.genre;
};

export const getAuthorizationStatus = (state) => {
  return state.USER.authorizationStatus;
};

export const getAvatarURL = (state) => {
  return (
    state.USER.authorizationInfo
      ? state.USER.authorizationInfo.avatar_url
      : null
  );
};

export const getMovies = (state) => {
  return state.DATA.movies;
};

export const getMovie = (state) => {
  return state.DATA.movie;
};

export const getFavoriteMovies = (state) => {
  return state.DATA.favoriteMovies;
};

export const getComments = (state) => {
  return state.DATA.comments;
};

export const getErrorText = (state) => {
  return state.DATA.errorText;
};

export const getIsCommentLoadingStatus = (state) => {
  return state.APP.isCommentLoading;
};

export const getGenreMovies = createSelector(getMovies, getGenre, (movies, genre) => {
  return filterMoviesByGenre(movies, genre);
});

export const getSimilarMovies = createSelector(getMovies, (state, movie) => movie, (movies, genre) => {
  return filterSimilarMovies(movies, genre);
});
