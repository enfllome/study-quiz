import TestItem from '../test-item/test-item';
import styles from './test-list.module.css';
import { quizList } from '../../../mocks/quiz';

type testListProps = {
  sortType: { name: string; sort: string };
};

function TestList({ sortType }: testListProps): JSX.Element {
  const {sort} = sortType;
  return (
    <ul className={styles.list}>
      {sort === 'all' && quizList.map((test) => (
        <TestItem key={test.id} test={test} />
      ))}
      {quizList
        .filter((test) => test.type === sort)
        .map((test) => (
          <TestItem key={test.id} test={test} />
        ))}
    </ul>
  );
}

export default TestList;
