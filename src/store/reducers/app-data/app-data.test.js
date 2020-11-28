import {appData, initialState} from './app-data';
import {ActionType} from '../../actions';
import {movies, movie, favoriteMovies} from '../../../test-mock-data/movie';
import {reviews} from '../../../test-mock-data/review';

describe(`App data reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appData(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update movies by load movies`, () => {
    expect(appData(
        initialState,
        {
          type: ActionType.LOAD_MOVIES,
          payload: movies
        }
    )).toEqual({
      movies,
      movie: null,
      favoriteMovies: null,
      comments: null
    });
  });

  it(`Reducer should update movie by load movie`, () => {
    expect(appData(
        initialState,
        {
          type: ActionType.LOAD_MOVIE,
          payload: movie
        }
    )).toEqual({
      movies: null,
      movie,
      favoriteMovies: null,
      comments: null
    });
  });

  it(`Reducer should update favoriteMovies by load favoriteMovies`, () => {
    expect(appData(
        initialState,
        {
          type: ActionType.LOAD_FAVORITE_MOVIES,
          payload: favoriteMovies
        }
    )).toEqual({
      movies: null,
      movie: null,
      favoriteMovies,
      comments: null
    });
  });

  it(`Reducer should update comments by load comments`, () => {
    expect(appData(
        initialState,
        {
          type: ActionType.LOAD_COMMENTS,
          payload: reviews
        }
    )).toEqual({
      movies: null,
      movie: null,
      favoriteMovies: null,
      comments: reviews
    });
  });
});
