import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';

import styles from './Error404.module.scss';

const Error404: FunctionComponent = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.errorPage}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Oops..
              <br />
              Error
            </h1>
            <p className={styles.text}>
              К сожалению, мы не можем найти страницу, которую вы ищете. Пожалуйста, перейдите по
              ссылке{' '}
              <Link to={'/'} className={styles.link}>
                Главная страница
              </Link>
            </p>
          </div>
          <img src="./error404.png" alt="Cat with a ball of string and a sign" />
        </section>
      </div>
    </Layout>
  );
};

export default Error404;
