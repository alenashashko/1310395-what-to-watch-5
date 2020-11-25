import {DEFAULT_MOVIES_FILTER_VALUE} from '../../../const';
import {ActionType} from '../../actions';
import {extend} from '../../../utils';

const initialState = {
  genre: DEFAULT_MOVIES_FILTER_VALUE,
  isCommentLoading: false
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
    default:
      return state;
  }
};

export {appFunctionality};
