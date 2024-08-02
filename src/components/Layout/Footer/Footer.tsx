import { FunctionComponent } from 'react';

import styles from './Footer.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          Footer СКАН, <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
