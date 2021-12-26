import { TIME } from '@/util';
import { ArticleModel } from './types';

/**
 * 查询当年文章个数、当月个数
 * @param data
 * @param type
 */
export function getGroupArticle(data: ArticleModel[]): { year: number; month: number; total: number } {
  if (!data?.length) return { year: 0, month: 0, total: 0 };
  let yearNo = 0,
    monthNo = 0;
  data.forEach(({ date, year }) => {
    const articleDate = new Date(date as string);
    const articleYear = articleDate.getFullYear();
    const articleMonth = articleDate.getMonth() + 1;
    if (articleYear === TIME.curYear || TIME.curYear.toString() === year) yearNo++;
    if (articleMonth === TIME.curMonth) monthNo++;
  });
  return {
    year: yearNo,
    month: monthNo,
    total: data.length,
  };
}
