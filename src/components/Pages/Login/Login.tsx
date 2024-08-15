import { FunctionComponent } from 'react';
import Layout from '../../Layout/Layout';
import LoginForm from '../../UI/LoginForm/LoginForm';

import styles from './Login.module.scss';

const Login: FunctionComponent = () => {
  return (
    <Layout>
      <div className="container">
        <section className={styles.login}>
          <h1 className={styles.heading}>
            Для оформления подписки на тариф, необходимо авторизоваться.
          </h1>
          <img
            src="./loginPageImg.svg"
            alt="A man and a woman carry the key"
            className={styles.img}
          />
          <LoginForm />
        </section>
      </div>
    </Layout>
  );
};

export default Login;
