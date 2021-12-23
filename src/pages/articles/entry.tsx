import React, { useMemo, useState } from 'react';
import { useMount } from '@/util';
import { Total } from './component/total';
import { getArticles } from './service';
import { ArticleModel } from './types';

import styles from './index.module.less';
import { getGroupArticle } from './util';
import { Temp } from './component/temp/temp';
import { List } from './component/list';

export const Article: React.FC<any> = () => {
  const [data, setData] = useState<ArticleModel[]>([]);
  useMount(async () => {
    const { data: res } = (await getArticles()) || {};
    if (res?.length) {
      setData(res);
    }
  });
  const { total, year, month } = useMemo(() => getGroupArticle(data), [data]);
  return (
    <>
      <div className={styles.topTitle}>My Articles</div>
      <div className={styles.search}>
        <i className="iconfont icon-search" />
      </div>
      <div className={styles.articles}>
        <Total total={total} curYearCount={year} curMonthCount={month} />
        <Temp />
        <List list={data} />
      </div>
    </>
  );
};
