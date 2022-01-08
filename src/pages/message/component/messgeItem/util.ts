import { getRandomItem, RANDOM_COLORS } from '@/util';

/**
 * 随机颜色
 * @returns {string}
 */
export function getRandomColor(): string {
  return getRandomItem(RANDOM_COLORS);
}

export function randomAligh(): string {
  return getRandomItem(['center', 'flex-start', 'flex-end']);
}
