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
 * @param importFn 组件的加载方法，例如import(xxx.tsx)
 * @returns {ReactNode} 返回加载后的组件
 */
export function useLoadComponent(importFn: FN<Promise<{ default: ReactNode }>>): ReactNode {
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
 * @param fn 定时器要做的事情，任意函数
 * @param timer 定时器时间间隔, number
 * @returns Partial<E> & Timer, 返回定时器每次执行的结果，以及重启定时器的方法
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

/**
 * hooks防抖
 * @param val 防抖的值 T 泛型
 * @param timer 防抖时间 number
 * @returns T 返回 T
 */
export function useDebounce<T>(val: T, timer = 500): T {
  const [deVal, setDeVal] = useState<T>(val);
  useEffect(() => {
    const delay = setTimeout(() => {
      setDeVal(val);
    }, timer);
    return () => clearTimeout(delay);
  }, [val]);
  return deVal;
}
