import { PROJECTS } from './constant';
import styles from './index.module.less';

export const Project: React.FC<any> = () => {
  return (
    <div className={styles.project}>
      {PROJECTS.map(({ title, url, icon, desc }) => (
        <a href={url} target="_blank" className={styles.projectItem} key={icon}>
          <div className={styles.title}>
            {title}
            <i className={icon} />
          </div>
          <div className={styles.desc}>{desc}</div>
        </a>
      ))}
    </div>
  );
};
