import { useToggle } from '@/util';
import { memo, useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

export const BottomMenu: React.FC<{ reload: string | undefined; resetTimer: VoidFunction }> = memo(
  ({ reload, resetTimer }) => {
    const [bool, { setTrue, setFalse }] = useToggle(false);
    useEffect(() => {
      if (reload) {
        setFalse();
      }
    }, [reload]);
    const [randomKey, setKey] = useState<number>(0);
    const onReset = useCallback(() => {
      resetTimer();
      setKey(Math.random());
    }, []);
    return (
      <div className={styles.bottom}>
        <div className={styles.item2}>
          <div onClick={onReset} className={styles.reset}>
            <i key={randomKey} className="icon-shuaxin1 iconfont" />
            <span>Next</span>
          </div>
          <div onClick={bool ? setFalse : setTrue}>
            <i
              key={String(bool)}
              className={classnames({
                iconfont: true,
                'icon-heart-fill': bool,
                'icon-heart': !bool,
                [styles.heart]: true,
              })}
            />
          </div>
        </div>
      </div>
    );
  },
  (pre, next) => pre.reload === next.reload,
);
