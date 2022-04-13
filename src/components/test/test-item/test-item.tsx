import { Test } from '../../../types/test';
import Title from '../../title/title';
import styles from './test-item.module.css';

type TestItemProps = {
  test: Test,
}

function TestItem ({ test }: TestItemProps): JSX.Element {
  return (
    <li className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <Title size='m'>{test.title}</Title>
        <p className={styles.descr}>Кол-во вопросов: <span>{test.questionsCount}</span></p>
      </div>
    </li>
  );
}

export default TestItem;
