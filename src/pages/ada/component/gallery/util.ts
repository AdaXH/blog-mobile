import { Img } from '../../types';

const GROUP_NUM = 3;

export function groupImages(imgs: Img[]): Array<Img[]> {
  const result = [];
  const groupCount = Math.floor(imgs.length / GROUP_NUM) - 1;
  let start = 0;
  while (start <= groupCount) {
    const curList = imgs.slice(start, start + GROUP_NUM);
    result.push(curList);
    start++;
  }
  return result;
}
