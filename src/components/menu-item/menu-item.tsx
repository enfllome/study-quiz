import styles from './menu-item.module.css';

type MenuItemProps = {
  name: string,
  icon: JSX.Element,
}

function MenuItem ({ name, icon }: MenuItemProps): JSX.Element {
  return (
    <li className={styles.item}>
      <a className={styles.link} href="#">{icon}{name}</a>
    </li>
  );
}

export default MenuItem;
