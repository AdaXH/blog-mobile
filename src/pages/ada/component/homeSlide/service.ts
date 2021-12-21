import { request } from '@/util';
import { Config } from '../../types';
/**
 * 查询图库
 * @returns
 */
export async function queryConfig() {
  return request<Config>('/api/getConfig');
}
