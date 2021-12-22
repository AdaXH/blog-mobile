import { TIME } from '@/util';
import React, { memo } from 'react';

import styles from './index.module.less';

export const Temp: React.FC<any> = memo(
  () => {
    return (
      <>
        <div className={styles.temp}>1</div>
        <div className={styles.temp2}>
          <div className={styles.left}>
            <span>{TIME.curDay}</span>
            <span>TODAY</span>
          </div>
          <div className={styles.right}>
            <span>Yesterday</span>
            <span>GONE</span>
          </div>
        </div>
      </>
    );
  },
  () => true,
);
