import {
  ActionType,
  changeGenre,
  loadMovies,
  loadMovieByID,
  loadFavoriteMovies,
  changeAuthorizationStatus,
  loadAuthorizationInfo,
  loadCommentsByID,
  redirectToRoute,
  saveErrorText,
  setAuthHasError,
  changeCommentLoadingStatus
} from './actions';
import {movie, movies, favoriteMovies} from '../test-mock-data/movie';
import {reviews} from '../test-mock-data/review';
import {AuthorizationStatus, AppRoute} from '../const';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(changeGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`
    });
  });

  it(`Action creator for loading movies returns correct action`, () => {
    expect(loadMovies(movies)).toEqual({
      type: ActionType.LOAD_MOVIES,
      payload: movies
    });
  });

  it(`Action creator for loading movie by id returns correct action`, () => {
    expect(loadMovieByID(movie)).toEqual({
      type: ActionType.LOAD_MOVIE,
      payload: movie
    });
  });

  it(`Action creator for loading favorite movies returns correct action`, () => {
    expect(loadFavoriteMovies(favoriteMovies)).toEqual({
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: favoriteMovies
    });
  });

  it(`Action creator for changing auth status returns correct action`, () => {
    expect(changeAuthorizationStatus(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.CHANGE_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH
    });
  });

  it(`Action creator for loading auth info returns correct action`, () => {
    expect(loadAuthorizationInfo({})).toEqual({
      type: ActionType.LOAD_AUTHORIZATION_INFO,
      payload: {}
    });
  });

  it(`Action creator for loading comments by id returns correct action`, () => {
    expect(loadCommentsByID(reviews)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: reviews
    });
  });

  it(`Action creator for redirecting to route returns correct action`, () => {
    expect(redirectToRoute(AppRoute.LOGIN)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: AppRoute.LOGIN
    });
  });

  it(`Action creator for saving error text returns correct action`, () => {
    expect(saveErrorText(`text`)).toEqual({
      type: ActionType.SAVE_ERROR_TEXT,
      payload: `text`
    });
  });

  it(`Action creator for setting if auth has error returns correct action`, () => {
    expect(setAuthHasError(true)).toEqual({
      type: ActionType.SET_LOGIN_HAS_ERROR,
      payload: true
    });
  });

  it(`Action creator for changing comment loading status returns correct action`, () => {
    expect(changeCommentLoadingStatus(true)).toEqual({
      type: ActionType.CHANGE_COMMENT_LOADING_STATUS,
      payload: true
    });
  });
});
