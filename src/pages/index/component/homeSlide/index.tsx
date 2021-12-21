import { Wrap } from '@/component/wrap';
import { useMount } from '@/util';
import React, { useState } from 'react';
import { Img } from '../../types';
import { SLIDES } from './constant';
import { queryConfig } from './service';

export interface HomeState {
  bgImg: Img[];
  blogTitle: string;
}

export const HomeSlide: React.FC<any> = () => {
  const [config, setConfig] = useState<HomeState>({ bgImg: [], blogTitle: '' });
  useMount(async () => {
    const res = await queryConfig();
    if (res?.config) {
      setConfig({
        bgImg: res.config?.bgImg || [],
        blogTitle: res.config?.blogTitle || '',
      });
    }
  });
  return (
    <>
      {SLIDES.map(({ Component, icon }, index) => (
        <Wrap icon={icon} key={icon} index={index}>
          <Component config={{ config }} />
        </Wrap>
      ))}
    </>
  );
};
