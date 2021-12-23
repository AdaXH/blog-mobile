export interface TotalGroup {
  total: number;
  curYearCount: number;
  curMonthCount: number;
}

type ArticleType = 'NodeJs' | 'Others' | 'Code' | 'JavaScript' | 'HTML' | 'CSS' | 'React';

export interface ArticleModel {
  /**
   * 文章标题
   */
  title?: string;
  /**
   * 文章摘要
   */
  abstract?: string;
  /**
   * 浏览量
   */
  viewer?: number;
  /**
   * 提交时间
   */
  date?: string | Date;
  /**
   * 文章类型
   */
  type?: ArticleType;
}
