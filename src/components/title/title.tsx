import styles from './title.module.css';
import cn from 'classnames';

type TitleProps = {
  size: 'l' | 'm',
  children: React.ReactNode,
}

function Title ({children, size}: TitleProps): JSX.Element {
  return (
    <h2 className={cn(styles.title, {
      [styles.l]: size === 'l',
      [styles.m]: size === 'm',
    })}
    >{children}
    </h2>
  );
}

export default Title;
