import { ArticleModel } from '../../types';
import { ListItem } from '../listItem';

import styles from './index.module.less';

export const List: React.FC<{ list: ArticleModel[] }> = ({ list }) => {
  return (
    <div className={styles.list}>
      <span className={styles.wrap}>
        {list.map((item, index) => (
          <ListItem key={index} data={item} />
        ))}
      </span>
    </div>
  );
};
