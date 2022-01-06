import { randonBool } from '@/util';
import React, { useMemo } from 'react';
import { Message } from '../../types';
import { getRandomColor } from './util';

import styles from './index.module.less';

export const MessageItem: React.FC<{ data: Message; index: number }> = ({ data, index }) => {
  const style = useMemo(() => {
    const bool = randonBool();
    return {
      width: bool ? '49%' : '100%',
      animationDelay: `${index * 0.05 || 0.1}s`,
    };
  }, []);
  const isShort = useMemo(() => style.width === '49%', [style.width]);
  return (
    <>
      <div className={styles.item} style={style}>
        <div className={styles.itemContent}>{data.content}</div>
      </div>
      {isShort && (
        <div className={styles.item} data-fill style={{ ...style, backgroundColor: getRandomColor() }}></div>
      )}
    </>
  );
};
