import Cookies from 'js-cookie';
import { stringify } from '.';

type Method = 'GET' | 'POST';
/**
 * request
 * @param url 请求的url
 * @param method 请求的方法
 * @param data 参数
 * @returns {T} 返回泛型
 */
export function request<T>(
  url: string,
  method: Method = 'GET',
  data?: Record<string, any>,
): Promise<T> {
  return new Promise((resolve, reject) => {
    const isGet = method === 'GET';
    const _url = isGet ? stringify(url, data) : url;
    const cfg: Record<string, any> = {};
    if (!isGet) {
      cfg.body = !isGet ? JSON.stringify(data) : '';
    }
    fetch(_url, {
      method,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        authorization: Cookies.get('token') || 'null',
        withCredentials: 'true',
      },
      ...cfg,
    })
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => reject(e));
  });
}
