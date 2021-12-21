import { HomeSlide } from './component/homeSlide';
import UserInfo from './component/userInfo';

import styles from './index.module.less';

function Pages() {
  return (
    <div className={styles.adaPage}>
      <UserInfo />
      <HomeSlide />
    </div>
  );
}

export default Pages;
