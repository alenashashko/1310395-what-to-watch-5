import {appFunctionality, initialState} from './app-functionality';
import {ActionType} from '../../actions';
import {DEFAULT_MOVIES_FILTER_VALUE} from '../../../const';

describe(`App functionality reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appFunctionality(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should change genre`, () => {
    expect(appFunctionality(
        initialState,
        {
          type: ActionType.CHANGE_GENRE,
          payload: `Comedy`
        }
    )).toEqual({
      genre: `Comedy`,
      isCommentLoading: false,
      errorText: null,
      isAuthError: null
    });
  });

  it(`Reducer should change comment loading status`, () => {
    expect(appFunctionality(
        initialState,
        {
          type: ActionType.CHANGE_COMMENT_LOADING_STATUS,
          payload: true
        }
    )).toEqual({
      genre: DEFAULT_MOVIES_FILTER_VALUE,
      isCommentLoading: true,
      errorText: null,
      isAuthError: null
    });
  });

  it(`Reducer should save error text`, () => {
    expect(appFunctionality(
        initialState,
        {
          type: ActionType.SAVE_ERROR_TEXT,
          payload: `some text`
        }
    )).toEqual({
      genre: DEFAULT_MOVIES_FILTER_VALUE,
      isCommentLoading: false,
      errorText: `some text`,
      isAuthError: null
    });
  });

  it(`Reducer should check if login has error`, () => {
    expect(appFunctionality(
        initialState,
        {
          type: ActionType.SET_LOGIN_HAS_ERROR,
          payload: true
        }
    )).toEqual({
      genre: DEFAULT_MOVIES_FILTER_VALUE,
      isCommentLoading: false,
      errorText: null,
      isAuthError: true
    });
  });
});
