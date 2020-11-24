import {AuthorizationStatus} from '../../../const';
import {ActionType} from '../../action';
import {extend} from '../../../utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload
      });
    default:
      return state;
  }
};

export {user};
