import React, { memo } from 'react';
import { useToggle } from '@/util';
import { MessageModal } from '../messageModal';
import styles from './index.module.less';

export const NewMsg: React.FC<any> = memo(
  () => {
    const [visible, { setTrue, setFalse }] = useToggle(true);
    const getValue = (val: string) => {
      console.log('val', val);
    };
    return (
      <>
        <div className={styles.newMsg}>
          <div className={styles.newMsgContent}>Message list</div>
          <div className={styles.newMsgEntry} onClick={setTrue}>
            Click here to say something
            <i className="iconfont icon-jiantou_xiangyou_o" />
          </div>
        </div>
        {visible && <MessageModal getValue={getValue} onClose={setFalse} />}
      </>
    );
  },
  () => true,
);
