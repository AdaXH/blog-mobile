import { ArticleModel } from '../../types';
import { ListItem } from '../listItem';

import styles from './index.module.less';

export const List: React.FC<{ list: ArticleModel[] }> = ({ list }) => {
  if (!list?.length) return null;
  return (
    <div className={styles.list}>
      {list.map((item) => (
        <ListItem key={item.title} data={item} />
      ))}
    </div>
  );
};
