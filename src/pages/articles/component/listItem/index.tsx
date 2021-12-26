import { parseTime } from '@/util';
import { useMemo } from 'react';
import { ArticleModel } from '../../types';
import styles from './index.module.less';

export const ListItem: React.FC<{ data: ArticleModel }> = ({ data }) => {
  if (!data || data.isHidden) return null;
  const { year, month, day } = useMemo(() => parseTime(data.date as string, Boolean(data.year)), [data.date]);
  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <div className={styles.itemInfoIcon}>
          <i className="iconfont icon-smile" />
        </div>
        <div className={styles.itemInfoTitle}>
          <span>{data.title}</span>
          {month && (
            <span>
              {month}-{day}
            </span>
          )}
        </div>
      </div>
      <div className={styles.itemType}>
        <span className={styles.itemTypeBox}>
          <i className="iconfont icon-fenjifenlei" />
          <span key={data.type} className={styles.itemTypeBoxText}>
            {data.type || '-'}
          </span>
        </span>
        <span className={styles.itemTypeBox}>
          <i className="iconfont icon-rili2" />
          <span key={data.type} className={styles.itemTypeBoxText}>
            {year || '-'}
          </span>
        </span>
        <span className={styles.itemTypeBox}>
          <i className="iconfont icon-liulan" />
          <span key={data.type} className={styles.itemTypeBoxText}>
            {data.viewer || 0}
          </span>
        </span>
      </div>
    </div>
  );
};
