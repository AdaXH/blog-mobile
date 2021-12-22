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
 * 来回切换bool值的hooks
 * @param initBool
 * @returns
 */
type ToggleReturn = [boolean, { setTrue: VoidFunction; setFalse: VoidFunction }];
export function useToggle(initBool = false): ToggleReturn {
  const [bool, setBool] = useState<boolean>(initBool);

  const setTrue = () => setBool(true);
  const setFalse = () => setBool(false);

  return [bool, { setTrue, setFalse }];
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
 * 定时器操作
 */
interface Timer {
  /**
   * 重置定时器
   */
  resetTimer: () => void;
}

/**
 * 定时器hooks, 自定义每次返回
 * @param fn
 * @param timer
 */
export function useInterval<T extends FN<E>, E>(fn: T, timer = 1000): Partial<E> & Timer {
  const ref = useRef<NodeJS.Timer | null>();
  const [data, setData] = useState<Partial<E>>({});

  const clearTimer = () => clearInterval(ref.current as NodeJS.Timer);
  const resetTimer = async () => {
    clearTimer();
    await setDataFn();
    ref.current = setInterval(setDataFn, timer);
  };

  const setDataFn = async () => {
    const res: E = await fn();
    setData(res);
  };

  useMount(resetTimer);
  useUnMount(() => {
    clearTimer();
  });
  return { ...data, resetTimer };
}
