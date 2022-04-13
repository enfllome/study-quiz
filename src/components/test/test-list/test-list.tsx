import { Test } from '../../../types/test';
import TestItem from '../test-item/test-item';
import styles from './test-list.module.css';

const Tests: Test[] = [
  {
    id: 1,
    title: 'Тема 1 Название темы',
    questionsCount: 5,
  },
  {
    id: 2,
    title: 'Тема 2 Название Алалалаа',
    questionsCount: 8,
  },
  {
    id: 3,
    title: 'Тема 1 Название Вакафалака',
    questionsCount: 15,
  },
];

function TestList (): JSX.Element {
  return (
    <ul className={styles.list}>
      {
        Tests.map((test) => (<TestItem key={test.id} test={test}/>))
      }
    </ul>
  );
}

export default TestList;
