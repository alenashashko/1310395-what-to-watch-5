import {user, initialState} from './user';
import {ActionType} from '../../actions';
import {AuthorizationStatus} from '../../../const';

describe(`User reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should change authorization status`, () => {
    expect(user(
        initialState,
        {
          type: ActionType.CHANGE_AUTHORIZATION_STATUS,
          payload: AuthorizationStatus.AUTH
        }
    )).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      authorizationInfo: null
    });
  });

  it(`Reducer should load auth info`, () => {
    expect(user(
        initialState,
        {
          type: ActionType.LOAD_AUTHORIZATION_INFO,
          payload: {fake: true}
        }
    )).toEqual({
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      authorizationInfo: {fake: true}
    });
  });

});
