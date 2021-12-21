import { useMount } from '@/util';
import { memo, useState } from 'react';
import { MomentItemModel } from '../../types';
import styles from './index.module.less';
import { queryMomentLimit } from './service';

export const Moment = memo(
  () => {
    const [data, setData] = useState<MomentItemModel[]>([]);
    useMount(async () => {
      const result = await queryMomentLimit({ limit: 5 });
      if (result?.data?.length) {
        setData(result.data);
      }
    });
    return (
      <div className={styles.moment}>
        {data.map((item) => (
          <div key={item._id} className={styles.momentItem}>
            <div className={styles.momentItemTitle}>{item.title}</div>
            <div className={styles.momentItemContent}>{item.content}</div>
          </div>
        ))}
      </div>
    );
  },
  () => true,
);
