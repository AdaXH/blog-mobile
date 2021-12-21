import StaticInfo from '../staticInfo';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfoAvatar} />
      <div className={styles.userInfoBottom}>
        <div className={styles.userInfoBottom}>
          <div className={styles.userInfoBottomName}>
            <span>Welcome Back,</span>
            <span>Ada</span>
          </div>
          <div className={styles.userInfoBottomSearch}>
            <i className="iconfont icon-search" />
          </div>
        </div>
      </div>
      <StaticInfo />
    </div>
  );
};
