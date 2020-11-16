import {DEFAULT_MOVIES_FILTER_VALUE} from '../const';
import {ActionType} from './actions';
import {extend} from '../utils';

const initialState = {
  genre: DEFAULT_MOVIES_FILTER_VALUE,
  movies: `` // ?
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return ``; // ?
    case ActionType.GET_MOVIES_BY_GENRE:
      return ``;// ?
    default:
      return state;
  }
};

export {reducer};
