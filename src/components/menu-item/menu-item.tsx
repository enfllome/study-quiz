import { Link } from 'react-router-dom';
import styles from './menu-item.module.css';

type MenuItemProps = {
  name: string,
  icon: JSX.Element,
  link: string,
}

function MenuItem ({ name, icon, link }: MenuItemProps): JSX.Element {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to={link}>{icon}{name}</Link>
    </li>
  );
}

export default MenuItem;
