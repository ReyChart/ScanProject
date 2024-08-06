import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

import styles from './HomePage.module.scss';

const HomePage: FunctionComponent = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  return (
    <Layout>
      <div className="container">
        <section className={styles.welcomeBlock}>
          <div className={styles.leftBlock}>
            <h1 className={styles.heading}>
              Cервис по поиску <br /> публикаций <br /> о компании <br /> по его ИНН
            </h1>
            <p className={styles.text}>
              Комплексный анализ публикаций, получение данных <br /> в формате PDF на электронную
              почту.
            </p>
            {isAuth && (
              <Link className={styles.link} to={'/search'}>
                Запросить данные
              </Link>
            )}
          </div>
          <div className={styles.rightBlock}>
            <img src="./welcomeImg.svg" alt="The human with the coffee runs the programs" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
