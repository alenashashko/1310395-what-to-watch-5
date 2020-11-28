import {DEFAULT_MOVIES_FILTER_VALUE} from '../../../const';
import {ActionType} from '../../actions';
import {extend} from '../../../utils';

export const initialState = {
  genre: DEFAULT_MOVIES_FILTER_VALUE,
  isCommentLoading: false,
  errorText: null,
  isAuthError: null
};

const appFunctionality = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.CHANGE_COMMENT_LOADING_STATUS:
      return extend(state, {
        isCommentLoading: action.payload
      });
    case ActionType.SAVE_ERROR_TEXT:
      return extend(state, {
        errorText: action.payload
      });
    case ActionType.SET_LOGIN_HAS_ERROR:
      return extend(state, {
        isAuthError: action.payload
      });
    default:
      return state;
  }
};

export {appFunctionality};
