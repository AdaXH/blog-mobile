import { TIME, useInterval, useMount } from '@/util';
import { memo, useCallback, useState } from 'react';
import { BottomMenu } from '../bottomMenu';
import { getHitokto } from '../../service';
import { HitokotoModel } from '../../types';

import styles from './index.module.less';

export const Hitokoto = memo(
  () => {
    const [data, setData] = useState<HitokotoModel>();
    const queryHitoko = useCallback(async () => {
      const d = await getHitokto();
      setData(d || {});
    }, []);
    useMount(queryHitoko);
    const {
      hitokoto: newHitokoto,
      from: newFrom,
      from_who: who,
      resetTimer,
    } = useInterval<any, HitokotoModel>(getHitokto, TIME.SEC * 20);
    const { from, hitokoto, from_who } = data || {};
    return (
      <>
        <div className={styles.hitokoto} key={String(newHitokoto)}>
          <div className={styles.desc}>{newHitokoto || hitokoto}</div>
          <div className={styles.author}>{newFrom || from || who || from_who}</div>
        </div>
        <BottomMenu resetTimer={resetTimer} reload={newHitokoto} />
      </>
    );
  },
  () => true,
);
