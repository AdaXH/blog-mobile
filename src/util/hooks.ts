import { ReactNode, useEffect, useState } from "react";

/**
 * didMount周期
 * @param fn
 */
export function useMount<T extends (...args: any[]) => any>(fn: T) {
  useEffect(() => {
    fn();
  }, []);
}

/**
 * 懒加载路由组件
 * @param importFn
 * @returns
 */
export function useLoadComponent(
  importFn: () => Promise<{ default: ReactNode }>
): ReactNode {
  const [Component, setComponent] = useState<ReactNode>(null);
  useMount(async () => {
    const Load = await (await importFn()).default;
    setComponent(Load);
  });
  if (!Component) return null;
  console.log("Component", Component);
  return Component;
}
