import {
  loadMovies,
  loadMovieByID,
  loadFavoriteMovies,
  loadPromoMovie,
  changeAuthorizationStatus,
  loadAuthorizationInfo,
  loadCommentsByID
} from '../store/action';
import {AuthorizationStatus} from '../const';
import {adaptMovieToClient} from '../services/adapters';
import {APIRoute} from '../const';

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
    .then(({data}) => {
      dispatch(loadAuthorizationInfo(data));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH));
    })
);

export const fetchCommentsListByID = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadCommentsByID(data)))
);

export const sendCommentByID = (id, requestBody) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, requestBody)
    .then(({data}) => dispatch(loadCommentsByID(data)))
);
