import { parseTime } from '@/util';
import { useMemo } from 'react';
import { ArticleModel } from '../../types';
import styles from './index.module.less';

export const ListItem: React.FC<{ data: ArticleModel }> = ({ data }) => {
  if (!data) return null;
  const { year, month, day } = useMemo(() => parseTime(data.date as string, Boolean(data.year)), [data.date]);
  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <div className={styles.itemInfoIcon}>
          <i className="iconfont icon-smile" />
        </div>
        <div className={styles.itemInfoTitle}>
          <span>{data.title}</span>
          <span>
            {month}-{day}
          </span>
        </div>
      </div>
      <div className={styles.itemType}>
        <span>
          <i className="iconfont icon-fenjifenlei" />
          {data.type}
        </span>
        <span>
          <i className="iconfont icon-rili2" />
          {year}
        </span>
      </div>
    </div>
  );
};
