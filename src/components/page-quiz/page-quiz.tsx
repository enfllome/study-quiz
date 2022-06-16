// import { useState } from 'react';
import { useState } from 'react';
import { quizList } from '../../mocks/quiz';
import Sort from '../sort/sort';
import Tag from '../tag/tag';
import TestList from '../test/test-list/test-list';
import Title from '../title/title';

function PageQquiz (): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortType, setSortType] = useState({
    name: 'все',
    sort: 'all',
  });
  return (
    <main className="main">
      <div className="main__top">
        <div className="main__left">
          <Title size="l">Тесты по темам</Title>
          <Tag>{quizList.length}</Tag>
        </div>
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <TestList sortType={sortType}/>
    </main>
  );
}

export default PageQquiz;
