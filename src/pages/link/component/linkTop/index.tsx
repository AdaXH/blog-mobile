import { memo } from 'react';
import styles from './index.module.less';

export const LinkTop: React.FC = memo(
  () => {
    return (
      <div className={styles.top}>
        <div className={styles.title}>Links</div>
      </div>
    );
  },
  () => true,
);
