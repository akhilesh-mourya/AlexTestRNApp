/***
INSQUAD - ROOT REDUCER CLASS - This class I created just for the structure
***/

import chat from './chat/reducer';

import {combineReducers} from '@reduxjs/toolkit';
import {api} from '../services/api';

const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  chat,
});

export default combinedReducer;
