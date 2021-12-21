import { Config } from '../../types';
import styles from './index.module.less';
import { Time } from './time';

export const SiteInfo: React.FC<{ config: Config }> = ({ config: { config } }) => {
  return (
    <div className={styles.siteInfo}>
      <div className={styles.siteInfoName}>{config?.blogTitle}</div>
      <div className={styles.siteInfoNo}>
        <div>
          <span>NO.12345</span>
        </div>
        <i className="iconfont icon-yonghu" />
        <i className="iconfont icon-shijian" />
        <div className={styles.time}>
          <span>
            <Time />
          </span>
        </div>
      </div>
    </div>
  );
};
