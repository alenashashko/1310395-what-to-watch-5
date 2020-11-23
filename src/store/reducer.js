import {DEFAULT_MOVIES_FILTER_VALUE} from '../const';
import {ActionType} from './action';
import {extend} from '../utils';
import {movies} from '../mocks/movies';

const initialState = {
  genre: DEFAULT_MOVIES_FILTER_VALUE,
  movies
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    default:
      return state;
  }
};

export {reducer};
