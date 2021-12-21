import { Hitokoto } from './hitokoto';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.home}>
      <div className={styles.mask} />
      <div className={styles.view}>
        <Hitokoto />
      </div>
    </div>
  );
};
