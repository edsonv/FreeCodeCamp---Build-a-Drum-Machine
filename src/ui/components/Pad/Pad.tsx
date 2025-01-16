import { ReactNode } from 'react';
import styles from './Pad.module.scss'

type Props = {
  children: ReactNode;
};

export const Pad = ({ children }: Props) => {
  return <div className={styles.pad}>{children}</div>;
};
