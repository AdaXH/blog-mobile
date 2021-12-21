import React from 'react';
import { Img } from '../../types';

import styles from './index.module.less';

export const ImgGroup: React.FC<{ images: Img[] }> = ({ images }) => {
  const [first, ...rest] = images;
  return (
    <div className={styles.imgGroup}>
      <div className={styles.first}>
        <ImgItem src={first.img} />
      </div>
      <div className={styles.rest}>
        {rest.map((item) => (
          <div key={item._id} className={styles.imgWrap}>
            <ImgItem src={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ImgItem: React.FC<{ src: string }> = ({ src }) => (
  <div className={styles.img} style={{ backgroundImage: `url(${src})` }} />
);
