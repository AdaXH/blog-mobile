import { useState } from 'react';
import Preview from './component/preview';
import Emoji from './component/emoji';
import { EMOJI_PREFIX } from './component/emoji/constant';
import { emojiList } from './constant';

import styles from './index.module.less';

interface AreaProps {
  onClose: () => void;
  getValue: (arg: string) => void;
  visible?: boolean;
}

export const MessageModal = (props: AreaProps) => {
  const [data, setData] = useState<string>('');
  const { onClose, getValue } = props;
  const [preview, setVisible] = useState(true);
  const [emojiVisible, setEmojiVisible] = useState(true);
  const onAdd = (code: string, pureText = false) => {
    const prefix = pureText ? ' ' : EMOJI_PREFIX;
    setData(`${data || ''}${prefix}${code}${prefix}`);
  };
  return (
    <div className={styles.dialogBox} onClick={() => onClose()}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <textarea value={data} onChange={(e) => setData(e.target.value)} placeholder="支持markdown语法" />
          <div className={styles.footer}>
            <a className={styles.item} onClick={() => setVisible(!preview)}>
              <i className="iconfont icon-preview" />
            </a>
            <a className={styles.item} onClick={() => setEmojiVisible(!emojiVisible)}>
              <i className="iconfont icon-emoji" />
            </a>
            <a className={styles.item} onClick={() => getValue(data)}>
              <i className="iconfont icon-queding" />
            </a>
          </div>
          {emojiVisible && <Emoji onAdd={onAdd} emojiList={emojiList} />}
          {preview && <Preview emojiList={emojiList} value={data} />}
        </div>
      </div>
    </div>
  );
};
