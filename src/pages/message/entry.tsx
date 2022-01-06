import { useMount } from '@/util';
import { useState } from 'react';
import { MessageTop } from './component/messageTop';
import { MessageItem } from './component/messgeItem';
import { NewMsg } from './component/newMsg';
import { getAllMessage } from './service';
import { Message } from './types';

import styles from './index.module.less';

export default () => {
  const [data, setData] = useState<Message[]>([]);
  const [pagination, setPagination] = useState<{ total: number; page: number }>({ total: 0, page: 1 });
  const query = async (pageIndex = 1) => {
    const { totalCount, data: resData } = await getAllMessage({ page: pageIndex, pageSize: 200 });
    if (resData) {
      setData(pageIndex === 1 ? resData : [...data, ...resData]);
      setPagination({
        total: totalCount,
        page: pageIndex,
      });
    }
  };
  useMount(query);
  return (
    <div className={styles.message}>
      <MessageTop total={pagination.total} />
      <div className={styles.messageList}>
        <NewMsg />
        <div className={styles.messageListWrap}>
          {data.map((item, index) => (
            <MessageItem key={item._id} index={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
