import React, { memo, useMemo } from 'react';
import { TIME, useToggle } from '@/util';
import { STATIC_TEXT } from './constant';

import styles from './index.module.less';

export const Temp: React.FC<any> = memo(
  () => {
    const [bool, { setTrue, setFalse }] = useToggle(true);
    const key = useMemo(() => (bool ? 'true' : 'false'), [bool]);
    return (
      <>
        <div className={styles.temp}>
          <div className={styles.tempLeft}>
            <i className="iconfont icon-earth-full" />
          </div>
          <div className={styles.tempRight} key={key}>
            <span>{STATIC_TEXT[key].mainTitle}</span>
            <span>{STATIC_TEXT[key].subTitle}</span>
          </div>
          <div className={styles.tempIcon} onClick={bool ? setFalse : setTrue}>
            <i className="iconfont icon-right" />
          </div>
        </div>
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
