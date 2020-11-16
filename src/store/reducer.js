import {ActionType} from './actions';
import {extend} from '../utils';

const initialState = {
  genre: `All genres`,
  movies: // ?
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: // ?
    case ActionType.GET_MOVIES_BY_GENRE: // ?
    default:
      return state;
  }
};

export {reducer};
