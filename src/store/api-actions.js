import {loadMovies, changeAuthorizationStatus} from '../store/action';
import {AuthorizationStatus} from '../const';
// import {adaptMovieToClient} from '../services/adapters';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    // .then(({movies}) => adaptMovieToClient(movies))
    .then(({data}) => dispatch(loadMovies(data)))
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
