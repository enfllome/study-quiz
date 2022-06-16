import { AppLocale } from './app-locale';
import { Questions } from './question';

export type Test = {
  id: number,
  quizTitle: string,
  type: string,
  quizSynopsis: string,
  nrOfQuestions: string,
  questions: Questions[],
  appLocale: AppLocale,
}

