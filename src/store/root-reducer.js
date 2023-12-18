import {combineReducers} from 'redux';
import {data} from './reducers/data/data-reducer';
import {user} from './reducers/user/user-reducer';

const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
};

const rootReducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});

export {rootReducer};
