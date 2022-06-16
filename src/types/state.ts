import { store } from '../store/index';
import { Books } from './books';
import { Test } from './test';

export type DataProcess = {
  tests: Test[],
  books: Books[],
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
