import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import Logo from '../logo/logo';
import styles from './not-found-screen.module.css';

function NotFoundScreen (): JSX.Element {
  return (
    <main className={styles.notFound}>
      <b className="cities__status">404. Page not found</b>
      <Logo />
      <Link className="cite__status__link" to={AppRoute.Root}>Вернуться на главную</Link>
    </main>
  );
}

export default NotFoundScreen;
