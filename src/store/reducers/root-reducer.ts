import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { dataProcess } from './data-process/data-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: dataProcess.reducer,
});
