import {DEFAULT_MOVIES_FILTER_VALUE} from '../const';
import {ActionType} from './actions';
import {extend} from '../utils';
import {movies} from '../mocks/movies';
import {filterMoviesByGenre} from '../core';

const initialState = {
  genre: DEFAULT_MOVIES_FILTER_VALUE,
  moviesByGenre: movies,
  allMovies: movies
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.FILTER_MOVIES_BY_GENRE:
      const moviesByGenre = filterMoviesByGenre(state.allMovies, state.genre);

      return extend(state, {
        moviesByGenre
      });
    default:
      return state;
  }
};

export {reducer};
