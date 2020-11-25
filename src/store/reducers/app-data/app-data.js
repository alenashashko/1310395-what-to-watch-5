import {ActionType} from '../../actions';
import {extend} from '../../../utils';

const initialState = {
  movies: null,
  currentMovie: null,
  favoriteMovies: null,
  promoMovie: null,
  comments: null,
  errorText: null
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload
      });
    case ActionType.LOAD_MOVIE:
      return extend(state, {
        currentMovie: action.payload
      });
    case ActionType.LOAD_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload
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
