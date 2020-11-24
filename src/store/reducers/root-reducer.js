import {combineReducers} from 'redux';
import {appFunctionality} from '../reducers/app-functionality/app-functionality';
import {appData} from '../reducers/app-data/app-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.APP]: appFunctionality,
  [NameSpace.USER]: user
});
