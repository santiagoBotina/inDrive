import { ReactNode, memo } from "react";
import styles from './Header.module.css'

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

function Component({title, subtitle, children}: Props) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children && children}
    </div>
  );
}

const Header = memo(Component);

export { Header };
