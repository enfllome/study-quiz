import Title from '../../title/title';
import styles from './books-item.module.css';

type BooksItemProps = {
  title: string,
  descr: string,
  img: string,
  link: string,
}

function BooksItem ({ title, descr, img, link }: BooksItemProps): JSX.Element {
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <img src={img} alt={`${title} book`} />
      </div>
      <div className={styles.info}>
        <Title size='m'>
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        </Title>
        <p className={styles.descr}>
          {descr}
        </p>
      </div>
    </li>
  );
}

export default BooksItem;
