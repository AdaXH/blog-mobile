import { request } from '@/util';
import { ArticleModel } from './types';

export function getArticles() {
  return request<{ data: ArticleModel[] }>('/api/getArticles');
}
