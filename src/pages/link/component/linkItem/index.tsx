import { Friend } from '../../types';
import styles from './index.module.less';
import { getRandomBg, getRandomIcon } from './util';

export const LinkItem: React.FC<{ data: Friend; index: number }> = ({ data, index }) => {
  if (!data.verify) return null;
  const bg = index === 0 ? 'white' : getRandomBg();
  return (
    <a
      href={data.link}
      className={styles.linkItem}
      style={{ backgroundColor: bg, animationDelay: `${index * 0.25 || '0.15'}s` }}
      data-white={bg === 'white'}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.title}>
        <i className={`iconfont ${getRandomIcon()}`} />
        <span>{data.title}</span>
      </div>
      <div className={styles.desc}>{data.desc}</div>
      <div className={styles.icon} style={{ backgroundImage: `url(${data.icon})` }}></div>
    </a>
  );
};
