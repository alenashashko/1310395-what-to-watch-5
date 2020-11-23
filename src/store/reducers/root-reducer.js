import {combineReducers} from 'redux';
import {appFunctionality} from '../reducers/app-functionality/app-functionality';
import {appData} from '../reducers/app-data/app-data';

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.APP]: appFunctionality
});
