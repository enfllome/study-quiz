import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import styles from './logo.module.css';

function Logo (): JSX.Element {
  return (
    <Link className={styles.logo} to={AppRoute.Root}>
      <img src='./img/logo.svg' alt='Study quiz logo'/>
    </Link>
  );
}

export default Logo;
