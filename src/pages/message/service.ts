import { request } from '@/util';
import { MessageResponse } from './types';

export function getAllMessage(data: { page: number; pageSize: number }) {
  return request<MessageResponse>('/api/getAllMessage', 'POST', data);
}
