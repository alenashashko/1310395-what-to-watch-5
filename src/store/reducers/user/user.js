import {AuthorizationStatus} from '../../../const';
import {ActionType} from '../../actions';
import {extend} from '../../../utils';

export const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationInfo: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.LOAD_AUTHORIZATION_INFO:
      return extend(state, {
        authorizationInfo: action.payload
      });
    default:
      return state;
  }
};

export {user};
