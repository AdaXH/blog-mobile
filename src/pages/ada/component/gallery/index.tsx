import { useMemo } from 'react';
import { ImgGroup } from './imgGroup';
import { groupImages } from './util';

import { Config } from '../../types';

import styles from './index.module.less';

export const Gallery: React.FC<{ config: Config }> = ({
  config: { config: { bgImg: images } = { bgImg: [] } },
}) => {
  const imagesMemo = useMemo(() => groupImages(images || []), [images]);
  return (
    <div className={styles.gallery}>
      {imagesMemo?.map((item, index) => (
        <ImgGroup images={item} key={index} />
      ))}
    </div>
  );
};
