import styles from './index.module.less';

function StaticInfo() {
  return (
    <div className={styles.static}>
      <div className={styles.staticIcon}>
        <i className="iconfont icon-message" />
      </div>
      <div className={styles.staticText}>
        <h4>Do you like it ?</h4>
        <h4>Contact me with QQ</h4>
      </div>
    </div>
  );
}

export default StaticInfo;
