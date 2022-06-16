import styles from './books-list.module.css';
import BooksItem from '../books-item/books-item';
import { books } from '../../../mocks/books';
function BooksList (): JSX.Element {
  return (
    <ul className={styles.list}>
      {
        books.map((book) => (
          <BooksItem key={book.title} {...book}/>
        ))
      }
    </ul>
  );
}

export default BooksList;
