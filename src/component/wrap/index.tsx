import React, { ReactNode } from "react";
import styles from "./index.module.less";

interface Props {
  children: ReactNode;
  icon: ReactNode;
  index: number;
}

export const Wrap: React.FC<Props> = ({ children, icon, index }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapIcon} data-index={index}>
        <i className={`iconfont ${icon}`} />
      </div>
      <div className={styles.wrapContent}>{children}</div>
    </div>
  );
};
