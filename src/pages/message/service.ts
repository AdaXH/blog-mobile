import { request } from '@/util';
import { MessageResponse } from './types';
// import mock from './mock.json';

export function getAllMessage(data: { page: number; pageSize: number }) {
  return request<MessageResponse>('/api/getAllMessage', 'POST', data);
  // return mock as MessageResponse;
}
