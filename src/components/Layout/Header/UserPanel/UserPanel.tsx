import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { userData } from '@/data/constants';
import BurgerMenu from '@/components/UI/BurgerMenu/BurgerMenu';
import clsx from 'clsx';

import styles from './UserPanel.module.scss';

const UserPanel: FunctionComponent = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <div className={styles.userPanel}>
      {isAuth ? (
        <div className={styles.infoWrapper}>
          <div className={styles.companyInfo}>
            <p className={styles.text}>
              Использовано компаний<span className={styles.numbers}>0</span>
            </p>
            <p className={styles.text}>
              Лимит по компаниям<span className={clsx(styles.numbers, styles.greenNum)}>5</span>
            </p>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userInfoWrap}>
              <p className={styles.name}>{userData.name}</p>
              <button className={styles.logoutBtn}>Выйти</button>
            </div>
            <img src={userData.img} alt="Avatar" className={styles.avatar} />
          </div>
          <BurgerMenu />
        </div>
      ) : (
        <div className={styles.loginAction}>
          <Link className={styles.registerLink} to="/register">
            Зарегистрироваться
          </Link>
          <div className={styles.devider}></div>
          <Link className={styles.authLink} to="/login">
            Войти
          </Link>
          <BurgerMenu />
        </div>
      )}
    </div>
  );
};

export default UserPanel;
