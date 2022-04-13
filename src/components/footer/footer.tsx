import styles from './footer.module.css';

function Footer (): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p className={styles.qopy}>Study quiz © 2022 Все права защищены</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" className={styles.link}>Пользовательское соглашение</a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>Политика конфиденциальности</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
