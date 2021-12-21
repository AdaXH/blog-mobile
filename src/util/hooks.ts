import { ReactNode, useEffect, useRef, useState } from 'react';

type FN<E> = (...args: any[]) => E;

/**
 * didMount周期
 * @param fn
 */
export function useMount<T extends FN<any>>(fn: T) {
  useEffect(() => {
    fn();
  }, []);
}

/**
 * unMount
 * @param fn
 */
export function useUnMount<T extends FN<any>>(fn: T) {
  useEffect(() => {
    return () => fn();
  }, []);
}

/**
 * 懒加载路由组件
 * @param importFn
 * @returns
 */
export function useLoadComponent(importFn: () => Promise<{ default: ReactNode }>): ReactNode {
  const [Component, setComponent] = useState<ReactNode>(null);
  useMount(async () => {
    const Load = await (await importFn()).default;
    setComponent(Load);
  });
  if (!Component) return null;
  return Component;
}

/**
 * 定时器hooks, 自定义每次返回
 * @param fn
 * @param timer
 */
export function useInterval<T extends FN<E>, E>(fn: T, timer: number = 1000): Partial<E> {
  const ref = useRef<T>();
  const [data, setData] = useState<Partial<E>>({});
  useMount(() => {
    ref.current = setInterval(() => {
      const res: E = fn();
      setData(res);
    }, timer) as any as T;
  });
  useUnMount<T>(ref.current as T);
  return data;
}
