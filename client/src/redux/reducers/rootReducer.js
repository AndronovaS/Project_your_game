/** @format */

import { combineReducers } from 'redux';
import questionReducer from './questReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  question: questionReducer,
  name: userReducer,
});

export default rootReducer;
