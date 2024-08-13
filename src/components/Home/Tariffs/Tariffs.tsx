import { FunctionComponent, useState, useEffect } from 'react';
import { tariffs } from '@/data/constants';
import TariffCard from './TariffCard/TariffCard';

import styles from './Tariffs.module.scss';

const Tariffs: FunctionComponent = () => {
  const [activeTariff, setActiveTariff] = useState<string | null>(null);

  useEffect(() => {
    setActiveTariff('Pro');
  }, []);

  return (
    <section className={styles.tariffs}>
      <h2 className={styles.heading}>Наши тарифы</h2>
      <div className={styles.tariffsWrapper}>
        {tariffs.map((tariff, index) => (
          <TariffCard key={index} tariff={tariff} isActive={activeTariff === tariff.name} />
        ))}
      </div>
    </section>
  );
};

export default Tariffs;
