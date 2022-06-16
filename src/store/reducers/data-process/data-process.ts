import { createSlice } from '@reduxjs/toolkit';
import { books } from '../../../mocks/books';
import { quizList } from '../../../mocks/quiz';
import { DataProcess } from '../../../types/state';
import { NameSpace } from '../../../utils/const';

const initialState: DataProcess = {
  tests: quizList,
  books: books,
};

export const dataProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {

  },
});

// export const {} = dataProcess.actions;
