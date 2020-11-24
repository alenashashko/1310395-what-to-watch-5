import {DEFAULT_MOVIES_FILTER_VALUE} from '../../../const';
import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  genre: DEFAULT_MOVIES_FILTER_VALUE,
};

const appFunctionality = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    default:
      return state;
  }
};

export {appFunctionality};
