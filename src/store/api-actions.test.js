import MockAdapter from 'axios-mock-adapter';

import {createAPI} from '../services/api';
import {APIRoute, AppRoute, MovieChangeStatus, AuthorizationStatus} from '../const';
import {ActionType} from './actions';
import {
  fetchMoviesList,
  fetchMovieByID,
  fetchFavoriteMoviesList,
  changeFavoriteMovieByID,
  fetchPromoMovie,
  checkAuth,
  login,
  fetchCommentsListByID,
  sendCommentByID
} from './api-actions';
import {
  apiMovies,
  apiFavoriteMovies,
  apiMovie,
  movies,
  favoriteMovies,
  movie
} from '../test-mock-data/movie';
import {
  apiReviews,
  reviews
} from '../test-mock-data/review';


const api = createAPI(() => {});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = fetchMoviesList();

    apiMock
      .onGet(APIRoute.MOVIES)
      .reply(200, apiMovies);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: movies
        });
      });
  });

  it(`Should make a correct API call to /films/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieLoader = fetchMovieByID(apiMovie.id);

    apiMock
      .onGet(`/films/${apiMovie.id}`)
      .reply(200, apiMovie);

    return movieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE,
          payload: movie
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteMoviesLoader = fetchFavoriteMoviesList();

    apiMock
      .onGet(APIRoute.FAVORITE_MOVIES)
      .reply(200, apiFavoriteMovies);

    return favoriteMoviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_MOVIES,
          payload: favoriteMovies
        });
      });
  });

  it(`Should make a correct API call to /favorite/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieFavoriteStatusChanger =
      changeFavoriteMovieByID(apiMovie.id, MovieChangeStatus.DELETE_FROM_FAVORITE);

    apiMock
      .onPost(`/favorite/${apiMovie.id}/${MovieChangeStatus.DELETE_FROM_FAVORITE}`)
      .reply(200, apiMovie);

    return movieFavoriteStatusChanger(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE,
          payload: movie
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = fetchPromoMovie();

    apiMock
      .onGet(APIRoute.PROMO_MOVIE)
      .reply(200, apiMovie);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE,
          payload: movie
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {fake: true});

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_AUTHORIZATION_INFO,
          payload: {fake: true}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AUTHORIZATION_STATUS,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const auth = login({fake: true});

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, {fake: true});

    return auth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_AUTHORIZATION_INFO,
          payload: {fake: true}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AUTHORIZATION_STATUS,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT
        });
      });
  });

  it(`Should call dispatch with correct params when /login response code is 401`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const auth = login({fake: true});

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(401, {fake: true});

    return auth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_LOGIN_HAS_ERROR,
          payload: true
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchCommentsListByID(apiReviews[0].id);

    apiMock
      .onGet(`/comments/${apiReviews[0].id}`)
      .reply(200, apiReviews);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: reviews
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsSender = sendCommentByID(apiReviews[0].id, {fake: true});

    apiMock
      .onPost(`/comments/${apiReviews[0].id}`)
      .reply(200, apiReviews);

    return commentsSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_COMMENT_LOADING_STATUS,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS,
          payload: reviews
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/films/${apiReviews[0].id}`
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.SAVE_ERROR_TEXT,
          payload: null
        });
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.CHANGE_COMMENT_LOADING_STATUS,
          payload: false
        });
      });
  });

  it(`Should call dispatch with correct params when /comments/id response code means fail`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsSender = sendCommentByID(apiReviews[0].id, {fake: true});

    apiMock
      .onPost(`/comments/${apiReviews[0].id}`)
      .reply(400, {error: `some text [some text]`});

    return commentsSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_COMMENT_LOADING_STATUS,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_COMMENT_LOADING_STATUS,
          payload: false
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SAVE_ERROR_TEXT,
          payload: `some text`
        });
      });
  });
});
