import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { userData } from '@/data/constants';

import styles from './UserPanel.module.scss';

const UserPanel: FunctionComponent = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <div className={styles.userPanel}>
      {isAuth ? (
        <>
          <div className={styles.companyInfo}>
            <p className={styles.text}>Использовано компаний</p>
            <p className={styles.numbers}>0</p>
            <p className={styles.text}>Лимит по компаниям</p>
            <p className={styles.numbers}>5</p>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userInfoWrap}>
              <p className={styles.name}>{userData.name}</p>
              <button className={styles.logoutBtn}>Выйти</button>
            </div>
            <img src={userData.img} alt="Avatar" className={styles.avatar} />
          </div>
        </>
      ) : (
        <div className={styles.loginAction}>
          <Link className={styles.registerLink} to="/register">
            Зарегистрироваться
          </Link>
          <Link className={styles.authLink} to="/login">
            Войти
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
