import { FunctionComponent } from 'react';
import clsx from 'clsx';

import styles from './Loader.module.scss';

interface LoaderProps {
  isBig?: boolean;
}

const Loader: FunctionComponent<LoaderProps> = ({ isBig = false }) => {
  return (
    <div className={styles.loader}>
      <img
        src="./loaderIcon.svg"
        alt="Loader"
        className={clsx(styles.loaderIcon, { [styles.loaderIconBig]: isBig })}
      />
      {isBig && <p className={styles.text}>Загружаем данные</p>}
    </div>
  );
};

export default Loader;
