import { FunctionComponent } from 'react';

import styles from './Tariffs.module.scss';

const Tariffs: FunctionComponent = () => {
  return (
    <section className={styles.tariffs}>
      <h2 className={styles.heading}>Наши тарифы</h2>
    </section>
  );
};

export default Tariffs;
