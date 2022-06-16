import { Link } from 'react-router-dom';
import { Test } from '../../../types/test';
import { AppRoute } from '../../../utils/const';
import Title from '../../title/title';
import styles from './test-item.module.css';

type TestItemProps = {
  test: Test,
}

function TestItem ({ test }: TestItemProps): JSX.Element {
  return (
    <li className={styles.item}>
      <Link to={`${AppRoute.Quiz}/${test.id}`}>
        <div className={styles.image}></div>
        <div className={styles.info}>
          <Title size='m'>{test.quizTitle}</Title>
          <p className={styles.descr}>Кол-во вопросов: <span>{test.nrOfQuestions}</span></p>
        </div>
      </Link>
    </li>
  );
}

export default TestItem;
