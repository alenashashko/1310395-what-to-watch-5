import {DEFAULT_MOVIES_FILTER_VALUE} from '../const';
import {ActionType} from './actions';
import {extend} from '../utils';
import {movies} from '../mocks/movies';

const initialState = {
  genre: DEFAULT_MOVIES_FILTER_VALUE,
  movies
};

const reducer = (state = initialState, action) => { // ? / reset ?
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        movies: action.payload
      });
    default:
      return state;
  }
};

export {reducer};
