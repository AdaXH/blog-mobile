import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './component/menu';
import styles from './index.module.less';

export const Layout: React.FC<{ children: ReactNode }> = (props) => {
  const { pathname } = useLocation();
  return (
    <>
      <div key={pathname} className={styles.layout}>
        {props.children}
      </div>
      <Menu />
    </>
  );
};
