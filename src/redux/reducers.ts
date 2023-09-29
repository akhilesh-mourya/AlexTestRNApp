/***
INSQUAD - ROOT REDUCER CLASS - This class I created just for the structure
***/

import loading from './loading/reducer';

import {combineReducers} from '@reduxjs/toolkit';
import {api} from '../services/api';

const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  loading,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
