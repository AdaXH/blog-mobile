import { openQQ, simpleShuffle, useMount } from '@/util';
import { useState } from 'react';
import { LinkItem } from './component/linkItem';
import { LinkTop } from './component/linkTop';

import { queryFriends } from './service';
import { Friend } from './types';
import styles from './index.module.less';

export default () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  useMount(async () => {
    const { data } = await queryFriends();
    if (data) {
      setFriends(simpleShuffle(data));
    }
  });
  return (
    <>
      <LinkTop />
      <div className={styles.links}>
        <div className={styles.myLink}>
          <div className={styles.avatar}></div>
          <div className={styles.myTitle}>Ada - Home</div>
          <div className={styles.myDesc}>Hi, Ada is my commonly used id</div>
          <div className={styles.myText} onClick={openQQ}>
            <div>Would you like to be my friend ?</div>
            <div>contact me now ! </div>
            <i className="iconfont icon-jiantou_xiangyou_o" />
          </div>
        </div>
        {friends?.map((item, index) => (
          <LinkItem data={item} index={index} key={item._id} />
        ))}
      </div>
    </>
  );
};
