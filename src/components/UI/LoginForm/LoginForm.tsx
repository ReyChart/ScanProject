import { FunctionComponent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './LoginForm.module.scss';

const LoginForm: FunctionComponent = () => {
  const [activeBtn, setActiveBtn] = useState<string>('login');

  const handleAuthBtnChange = useCallback((buttonType: string) => {
    setActiveBtn(buttonType);
  }, []);

  return (
    <div className={styles.formWrapper}>
      <img src="./lockIcon.svg" alt="Lock" className={styles.formIcon} />
      <div className={styles.btnWrapper}>
        <button
          className={clsx(styles.authBtn, { [styles.btnInactive]: activeBtn !== 'login' })}
          onClick={() => handleAuthBtnChange('login')}
        >
          Войти
        </button>
        <button
          className={clsx(styles.authBtn, { [styles.btnInactive]: activeBtn !== 'register' })}
          onClick={() => handleAuthBtnChange('register')}
        >
          Зарегистрироваться
        </button>
      </div>
      {activeBtn === 'login' ? (
        <>
          <form className={styles.loginForm}>
            <label htmlFor="" className={styles.label}>
              Логин или номер телефона:
            </label>
            <input type="text" className={styles.input} />
            <span className={styles.errorMsg}></span>
            <label htmlFor="" className={styles.label}>
              Пароль:
            </label>
            <input type="text" className={styles.input} />
            <span className={styles.errorMsg}></span>
            <button className={styles.submitBtn}>Войти</button>
          </form>
          <Link className={styles.recoveryLink} to={'/password-recovery'}>
            Восстановить пароль
          </Link>
          <div className={styles.socialNetwork}>
            <p className={styles.socialText}>Войти через:</p>
            <div className={styles.socialBtnWrapper}>
              <button className={styles.socialBtn}>
                <img src="./googleIcon.svg" alt="Google icon" />
              </button>
              <button className={styles.socialBtn}>
                <img src="./facebookIcon.svg" alt="Facebook icon" />
              </button>
              <button className={styles.socialBtn}>
                <img src="./yandexIcon.svg" alt="Yandex icon" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className={styles.registerForm}>Форма регистрации временно недоступна!</p>
      )}
    </div>
  );
};

export default LoginForm;
