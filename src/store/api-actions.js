import {loadMovies, loadFavoriteMovies, loadPromoMovie, changeAuthorizationStatus} from '../store/action';
import {AuthorizationStatus} from '../const';
// import {adaptMovieToClient} from '../services/adapters';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    // .then(({movies}) => movies.map(adaptMovieToClient))
    .then(({data}) => dispatch(loadMovies(data)))
);

export const fetchFavoriteMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    // .then(({movies}) => movies.map(adaptMovieToClient))
    .then(({data}) => dispatch(loadFavoriteMovies(data)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
  // .then(({movie}) => adaptMovieToClient(movie))
  .then(({data}) => dispatch(loadPromoMovie(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = (data) => (dispatch, _getState, api) => (
  api.post(`/login`, data)
    .then(() => dispatch(changeAuthorizationStatus(AuthorizationStatus.AUTH)))
);
