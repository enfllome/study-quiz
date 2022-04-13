import styles from './tag.module.css';

type TagProps = {
  children: React.ReactNode
}

function Tag ({children}: TagProps): JSX.Element {
  return (
    <div className={styles.tag}>{children}</div>
  );
}

export default Tag;
