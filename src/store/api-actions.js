import {loadMovies, loadMovieByID, loadFavoriteMovies, loadPromoMovie, changeAuthorizationStatus} from '../store/action';
import {AuthorizationStatus} from '../const';
import {adaptMovieToClient} from '../services/adapters';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map(adaptMovieToClient))
    .then((adaptedMovies) => dispatch(loadMovies(adaptedMovies)))
);

export const fetchMovieByID = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => adaptMovieToClient(data))
    .then((movie) => dispatch(loadMovieByID(movie)))
);

export const fetchFavoriteMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => data.map(adaptMovieToClient))
    .then((adaptedMovies) => dispatch(loadFavoriteMovies(adaptedMovies)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
  .then(({data}) => adaptMovieToClient(data))
  .then((movie) => dispatch(loadPromoMovie(movie)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = (data) => (dispatch, _getState, api) => (
  api.post(`/login`, data)
    .then(() => dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH)))
);
