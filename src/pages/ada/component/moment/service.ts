import { request } from '@/util';
import { MomentModel } from '../../types';

export async function queryMomentLimit(data: Record<string, any>) {
  return request<MomentModel>('/api/queryMoment', 'GET', data);
}
