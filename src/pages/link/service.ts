import { request } from '@/util';
import { Friend } from './types';

export function queryFriends<T extends { data: Friend[] }>(): Promise<T> {
  return request<T>('/api/queryFriends');
}
