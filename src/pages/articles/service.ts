import { request } from '@/util';
// import mock from './mock.json';
import { ArticleModel } from './types';

export function getArticles() {
  return request<{ data: ArticleModel[] }>('/api/getArticles');
  // return mock as { data: ArticleModel[] };
}
