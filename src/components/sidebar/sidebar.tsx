import Logo from '../logo/logo';
import MenuList from '../menu-list/menu-list';
import styles from './sidebar.module.css';

function Sidebar (): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <MenuList />
    </div>
  );
}

export default Sidebar;
