import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import UserPanel from './UserPanel/UserPanel';

import styles from './Header.module.scss';

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/" className={styles.headerLogo}>
          <img src="./scanLogo.svg" alt="Logo" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.navLink} to={'/'}>
                Главная
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to={'/tariffs'}>
                Тарифы
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to={'/faq'}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <UserPanel />
      </div>
    </header>
  );
};

export default Header;
