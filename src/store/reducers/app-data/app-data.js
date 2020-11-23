import {ActionType} from '../../action';
import {extend} from '../../../utils';
import {movies} from '../../../mocks/movies';

const initialState = {
  movies
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload
      });
    default:
      return state;
  }
};

export {appData};
