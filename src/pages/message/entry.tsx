import { useMount } from '@/util';
import { useState } from 'react';
import { MessageTop } from './component/messageTop';
import { MessageItem } from './component/messgeItem';
import { NewMsg } from './component/newMsg';
import styles from './index.module.less';
import { getAllMessage } from './service';
import { Message } from './types';

export default () => {
  const [data, setData] = useState<Message[]>([]);
  const [pagination, setPagination] = useState<{ total: number; page: number }>({ total: 0, page: 1 });
  const query = async (pageIndex = 1) => {
    const { totalCount, data: resData } = await getAllMessage({ page: pageIndex });
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
        {data.map((item) => (
          <MessageItem key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};
