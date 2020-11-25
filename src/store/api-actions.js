import {
  loadMovies,
  loadMovieByID,
  loadFavoriteMovies,
  loadPromoMovie,
  changeAuthorizationStatus,
  loadAuthorizationInfo,
  loadCommentsByID,
  redirectToRoute,
  saveErrorText
} from './actions';
import {AuthorizationStatus} from '../const';
import {adaptMovieToClient, adaptCommentToClient} from '../services/adapters';
import {APIRoute, AppRoute} from '../const';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => data.map(adaptMovieToClient))
    .then((adaptedMovies) => dispatch(loadMovies(adaptedMovies)))
);

export const fetchMovieByID = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => adaptMovieToClient(data))
    .then((movie) => dispatch(loadMovieByID(movie)))
);

export const fetchFavoriteMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_MOVIES)
    .then(({data}) => data.map(adaptMovieToClient))
    .then((adaptedMovies) => dispatch(loadFavoriteMovies(adaptedMovies)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_MOVIE)
  .then(({data}) => adaptMovieToClient(data))
  .then((movie) => dispatch(loadPromoMovie(movie)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(loadAuthorizationInfo(data));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      throw err;
    })
);

export const login = (requestBody) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, requestBody)
    .then(({data}) => dispatch(loadAuthorizationInfo(data)))
    .then(() => dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const fetchCommentsListByID = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => data.map(adaptCommentToClient))
    .then((adaptedComments) => dispatch(loadCommentsByID(adaptedComments)))
);

export const sendCommentByID = (id, requestBody) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, requestBody)
    .then(({data}) => data.map(adaptCommentToClient))
    .then((adaptedComments) => dispatch(loadCommentsByID(adaptedComments)))
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
    .then(() => dispatch(saveErrorText(null)))
    .catch((error) => {
      const errorTextFull = error.response.data.error;
      const errorTextToShow = errorTextFull.slice(errorTextFull.indexOf(`[`) + 1, -1);

      return dispatch(saveErrorText(errorTextToShow));
    })
);
