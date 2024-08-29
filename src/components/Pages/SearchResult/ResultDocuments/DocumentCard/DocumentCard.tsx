import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { getRandomImage } from '@/utils/supportFunctions';

import styles from './DocumentCard.module.scss';

const DocumentCard: FunctionComponent = () => {
  const randomImage = getRandomImage();

  return (
    <article className={styles.documentCard}>
      <div className={styles.infoContainer}>
        <p className={styles.date}>13.09.2021</p>
        <a href="#" className={styles.link}>
          Комсомольская правда KP.RU
        </a>
      </div>
      <h3 className={styles.title}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h3>
      <div className={styles.typesContainer}>
        <p className={clsx(styles.type, styles.turquoise)}>Дайджест</p>
        <p className={clsx(styles.type, styles.green)}>Анонс</p>
        <p className={clsx(styles.type, styles.yellow)}>Технические новости</p>
      </div>
      <img src={randomImage.src} alt={randomImage.alt} className={styles.img} />
      <p className={styles.text}>
        SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение
        прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет.
        Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon
        и других топовых компаниях. <br />
        <br />
        Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство.
        80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают
        менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме,
        подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
      </p>
      <div className={styles.additionalInfoContainer}>
        <Link to={'#'} target="_blank" className={styles.sourceLink}>
          Читать в источнике
        </Link>
        <p className={styles.wordCount}>2 543 слова</p>
      </div>
    </article>
  );
};

export default DocumentCard;
