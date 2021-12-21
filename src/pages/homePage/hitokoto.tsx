import { TIME, useInterval, useMount } from '@/util';
import { memo, useCallback, useState } from 'react';

import styles from './index.module.less';
import { getHitokto } from './service';

export interface HitokotoModel {
  hitokoto: string;
  from: string;
  from_who: string;
}

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
    } = useInterval<any, HitokotoModel>(getHitokto, TIME.SEC * 20);
    const { from, hitokoto, from_who } = data || {};
    return (
      <div className={styles.hitokoto} key={String(newHitokoto || Hitokoto)}>
        <div className={styles.desc}>{newHitokoto || hitokoto}</div>
        <div className={styles.author}>{newFrom || from || who || from_who}</div>
      </div>
    );
  },
  () => true,
);
