import React from 'react';
import { Total } from './component/total';
import styles from './index.module.less';

function Article() {
  return (
    <div className={styles.articles}>
      <Total total={100} curYearCount={66} curMonthCount={59} />
    </div>
  );
}

export default Article;
