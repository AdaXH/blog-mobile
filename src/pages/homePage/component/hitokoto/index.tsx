import { TIME, useInterval, useMount } from '@/util';
import { memo, useCallback, useState } from 'react';
import { BottomMenu } from '../bottomMenu';
import { getHitokto } from '../../service';
import { HitokotoModel } from '../../types';

import styles from './index.module.less';

export const Hitokoto = memo(
  () => {
    const { hitokoto, from, from_who, resetTimer } = useInterval<any, HitokotoModel>(
      getHitokto,
      TIME.SEC * 20,
    );
    return (
      <>
        <div className={styles.hitokoto} key={String(hitokoto)}>
          <div className={styles.desc}>{hitokoto}</div>
          <div className={styles.author}>{from || from_who}</div>
        </div>
        <BottomMenu resetTimer={resetTimer} reload={hitokoto} />
      </>
    );
  },
  () => true,
);
