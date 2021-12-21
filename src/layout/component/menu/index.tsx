import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MENUS } from './constant';
import styles from './index.module.less';

function Menu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className={styles.menu}>
      {MENUS.map(({ icon, path }) => (
        <div key={path} className={styles.menuItem} onClick={() => navigate(path)}>
          <i data-current={pathname === path} className={icon} />
        </div>
      ))}
    </div>
  );
}

export default Menu;
