import {ActionType} from '../../action';
import {extend} from '../../../utils';
import {movies} from '../../../mocks/movies';

const initialState = {
  movies,
  currentMovie: {},
  favoriteMovies: [],
  promoMovie: {}
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
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload
      });
    default:
      return state;
  }
};

export {appData};
