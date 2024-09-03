import { FunctionComponent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import { logout } from '@/redux/userSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { BurgerInterface } from '@/interfaces/general.inerfaces';

import styles from './BurgerMenu.module.scss';

const BurgerMenu: FunctionComponent = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((state) => state.user.isAuthorized);

  const handleLogout = () => {
    dispatch(logout());
    navigate('');
  };

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
        {isAuthorized ? (
          <button onClick={handleLogout} className={styles.burgerLogout}>
            Выйти
          </button>
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
