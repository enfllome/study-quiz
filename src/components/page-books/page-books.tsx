import Tag from '../tag/tag';
import Title from '../title/title';
import BooksList from './books-list/books-list';
import { books } from '../../mocks/books';
function PageBooks (): JSX.Element {
  return (
    <main className="main">
      <div className="main__top">
        <div className="main__left">
          <Title size="l">Список полезной литературы</Title>
          <Tag>{books.length}</Tag>
        </div>
      </div>
      <BooksList/>
    </main>
  );
}

export default PageBooks;
