import { FunctionComponent } from 'react';
import Layout from '../Layout/Layout';

import styles from './HomePage.module.scss';

const HomePage: FunctionComponent = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.welcomeBlock}>
          <h1>Здесь будет стартовая страница</h1>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
