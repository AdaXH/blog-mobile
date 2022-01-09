import { useMount } from '@/util';
import { useEffect, useMemo, useState } from 'react';
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
    const { totalCount, data: resData } = await getAllMessage({ page: pageIndex, pageSize: 10 });
    if (resData) {
      setData(pageIndex === 1 ? resData : [...data, ...resData]);
      setPagination({
        total: totalCount,
        page: pageIndex,
      });
    }
  };

  const { total, page } = pagination;

  useMount(query);

  useEffect(() => {
    function listenScoll() {
      if (!data.length || data.length === total || total === 1 || !total) return;
      const scrollTop = document.scrollingElement?.scrollTop || 0;
      const scrollHeight = document.scrollingElement?.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight === scrollHeight) {
        query(page + 1);
      }
    }
    window.addEventListener('scroll', listenScoll);
    return () => window.removeEventListener('scroll', listenScoll);
  }, [page, total, data.length]);
  const messageCount = useMemo(
    () => data?.reduce((pre, item) => pre + item.repeat?.length, 0) + total,
    [data.length, total],
  );
  return (
    <div className={styles.message}>
      <MessageTop total={messageCount} />
      <div className={styles.messageList}>
        <NewMsg />
        <div className={styles.messageListWrap}>
          {data.map((item, index) => (
            <MessageItem key={index} index={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
