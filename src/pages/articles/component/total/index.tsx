import React from 'react';
import { TotalGroup } from '../../types';

import styles from './index.module.less';

export const Total: React.FC<TotalGroup> = ({ total, curMonthCount, curYearCount }) => {
  return (
    <div className={styles.total}>
      <div className={styles.item}>
        <div>{total}</div>
        <div>total</div>
        <div className={styles.icon}>
          <i className="iconfont icon-tongji" />
        </div>
      </div>
      <div className={styles.item}>
        <div>{curYearCount}</div>
        <div>year</div>
        <div className={styles.icon}>
          <i className="iconfont icon-rili1" />
        </div>
      </div>
      <div className={styles.item}>
        <div>{curMonthCount}</div>
        <div>month</div>
        <div className={styles.icon}>
          <i className="iconfont icon-rili" />
        </div>
      </div>
    </div>
  );
};
