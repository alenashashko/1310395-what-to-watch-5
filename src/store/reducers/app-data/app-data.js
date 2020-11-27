import {ActionType} from '../../actions';
import {extend} from '../../../utils';

const initialState = {
  movies: null,
  movie: null,
  favoriteMovies: null,
  comments: null
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload
      });
    case ActionType.LOAD_MOVIE:
      return extend(state, {
        movie: action.payload
      });
    case ActionType.LOAD_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
    default:
      return state;
  }
};

export {appData};
