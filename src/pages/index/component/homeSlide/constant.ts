import React from 'react';
import { Gallery } from '../gallery';
import { Moment } from '../moment';
import { SiteInfo } from '../siteInfo';

export const SLIDES = [
  {
    Component: SiteInfo,
    icon: 'icon-info',
  },
  {
    Component: Gallery,
    icon: 'icon-image',
  },
  {
    Component: Moment,
    icon: 'icon-dongtai',
  },
];
