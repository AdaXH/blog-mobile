import React, { ReactNode } from 'react';
import Menu from './component/menu';
import styles from './index.module.less';

export const Layout: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <div className={styles.layout}>{props.children}</div>
      <Menu />
    </>
  );
};
