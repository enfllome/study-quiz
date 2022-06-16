import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import Logo from '../logo/logo';
import MenuList from '../menu-list/menu-list';
import styles from './sidebar.module.css';

function Sidebar (): JSX.Element | null {
  const location = useLocation();
  if (location.pathname !== AppRoute.Tests &&
      location.pathname !== `${AppRoute.Quiz}/1` &&
      location.pathname !== `${AppRoute.Quiz}/2` &&
      location.pathname !== `${AppRoute.Quiz}/3` &&
      location.pathname !== AppRoute.Literature &&
      location.pathname !== AppRoute.Root
  ) {
    return null;
  }

  return (
    <div className={styles.sidebar}>
      <Logo />
      <MenuList />
    </div>
  );
}

export default Sidebar;
