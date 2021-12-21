/**
 * 小时，分钟，秒，带0格式化
 * @param no
 * @returns
 */
export function stringTime(no: number): string {
  const str = `${no}`;
  return str.length === 1 ? `0${str}` : str;
}

/**
 * stringify对象 {a: "b"} => ?a=b
 * @param data
 * @returns
 */
export function stringify(originUrl: string, data?: Record<string, any>): string {
  if (!data) return originUrl;
  let res = originUrl;
  Object.keys(data).forEach((key, index) => {
    res += `${index === 0 ? '?' : '&'}${key}=${data[key]}`;
  });
  return res;
}
