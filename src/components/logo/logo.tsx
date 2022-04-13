import styles from './logo.module.css';

function Logo (): JSX.Element {
  return (
    <a className={styles.logo} href='#'>
      <img src='./img/logo.svg' alt='Study quiz logo'/>
    </a>
  );
}

export default Logo;
