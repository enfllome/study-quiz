import { State } from './../../types/state';

export const getTests = ({DATA}: State) => DATA.tests;
export const getBooks = ({DATA}: State) => DATA.books;
export const getCurrentTest = (id: number | undefined) => ({DATA}: State) => DATA.tests.find((test) => test.id === id);
