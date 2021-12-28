import React, { memo } from 'react';

import styles from './index.module.less';

export const MessageTop: React.FC<{ total: number }> = memo(
  ({ total }) => {
    return (
      <div className={styles.top}>
        <div className={styles.title}>
          Message
          <span>
            <i className="iconfont icon-liaotian" />
            {total}
          </span>
        </div>
      </div>
    );
  },
  (pre, next) => pre.total !== next.total,
);
