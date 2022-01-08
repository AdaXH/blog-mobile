import { parseTime, replaceEmoji } from '@/util';
import React, { memo } from 'react';
import showdown from 'showdown';
import { Message } from '../../types';
import { getRandomColor } from './util';

import styles from './index.module.less';

const converter = new showdown.Converter();

export const MessageItem: React.FC<{ data: Message; index: number }> = memo(
  ({ data }) => {
    const { year, month, day } = parseTime(data.date);
    return (
      <>
        <div className={styles.item}>
          <div className={styles.itemBg} style={{ backgroundColor: `${getRandomColor()}` }}>
            <div
              className={styles.itemBgAvatar}
              style={{ backgroundImage: `url(${data.avatar})`, backgroundColor: `${getRandomColor()}` }}
            ></div>
            <div className={styles.itemBgName}>
              @<span>{data.name}</span>
              <span>
                {year}/{month}/{day}
              </span>
            </div>
          </div>
          <div
            className={styles.itemContent}
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(replaceEmoji(data.content) || ''),
            }}
          ></div>
        </div>
      </>
    );
  },
  (pre, next) => pre.index === next.index,
);
