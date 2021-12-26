import { getRandomItem } from '@/util';
import { BGS, ICONS } from './constant';

export function getRandomIcon(): string {
  return getRandomItem(ICONS);
}

export function getRandomBg(): string {
  return getRandomItem(BGS);
}
