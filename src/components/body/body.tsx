import Tag from '../tag/tag';
import TestList from '../test/test-list/test-list';
import Title from '../title/title';
import styles from './body.module.css';

function Body (): JSX.Element {
  return (
    <main className={styles.body}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Title size='l'>Тесты по темам</Title>
          <Tag>10</Tag>
        </div>
        <div>
          По алфавиту
        </div>
      </div>
      <TestList />

    </main>
  );
}

export default Body;
