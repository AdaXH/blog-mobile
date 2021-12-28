import React, { memo } from 'react';
import styles from './index.module.less';

export const NewMsg: React.FC<any> = memo(
  () => {
    return (
      <div className={styles.newMsg}>
        <div className={styles.newMsgContent}>1</div>
      </div>
    );
  },
  () => true,
);
