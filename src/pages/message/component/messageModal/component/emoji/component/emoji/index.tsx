import { memo } from 'react';
import { EmojiProps } from '../../index';
import styles from './index.module.less';

export default memo(({ onAdd, emojiList }: EmojiProps) => {
  return (
    <div className={styles.emojiContaienr}>
      {emojiList.map((item) => (
        <a key={item.code} className={styles.emojiItem} onClick={() => onAdd?.(item.code)}>
          {/* <div className={styles.big}> */}
          <img className={styles.big} src={item.src} alt="" />
          {/* </div> */}
          <img className={styles.small} src={item.src} alt="" />
        </a>
      ))}
    </div>
  );
});
