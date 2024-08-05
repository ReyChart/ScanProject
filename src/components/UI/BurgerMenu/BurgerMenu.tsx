import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import styles from './BurgerMenu.module.scss';

interface BurgerInterface {
  isOpen: boolean;
}

const BurgerMenu: FunctionComponent = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const handleBurger = (state: BurgerInterface) => {
    setIsBurgerOpen(state.isOpen);
  };

  const closeBurger = () => {
    setIsBurgerOpen(false);
  };

  return (
    <Menu right width={'100%'} isOpen={isBurgerOpen} onStateChange={handleBurger}>
      <img className={styles.burgerLogo} src="./scanBurgerLogo.svg" alt="Logo" />
      <ul className={styles.burgerList}>
        <li className={styles.burgerItem} onClick={closeBurger}>
          <Link className={styles.burgerLink} to={'/'}>
            Главная
          </Link>
        </li>
        <li className={styles.burgerItem} onClick={closeBurger}>
          <Link className={styles.burgerLink} to={'/tariffs'}>
            Тарифы
          </Link>
        </li>
        <li className={styles.burgerItem} onClick={closeBurger}>
          <Link className={styles.burgerLink} to={'/faq'}>
            FAQ
          </Link>
        </li>
      </ul>
      <div className={styles.burgerBtnWrapper}>
        {isAuth ? (
          <button className={styles.burgerLogout}>Выйти</button>
        ) : (
          <>
            <Link to={'/register'} className={styles.burgerRegister} onClick={closeBurger}>
              Зарегистрироваться
            </Link>
            <Link to={'/login'} className={styles.burgerLogin} onClick={closeBurger}>
              Войти
            </Link>
          </>
        )}
      </div>
    </Menu>
  );
};

export default BurgerMenu;
