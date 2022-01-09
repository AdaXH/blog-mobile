import React, { memo } from 'react';
import styles from './index.module.less';

export const NewMsg: React.FC<any> = memo(
  () => {
    return (
      <div className={styles.newMsg}>
        <div className={styles.newMsgContent}>Message list</div>
        <div className={styles.newMsgEntry}>
          Click here to say something
          <i className="iconfont icon-jiantou_xiangyou_o" />
        </div>
      </div>
    );
  },
  () => true,
);
