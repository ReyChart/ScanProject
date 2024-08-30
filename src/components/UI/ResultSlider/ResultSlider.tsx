import { FunctionComponent, useState } from 'react';
import clsx from 'clsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import styles from './ResultSlider.module.scss';

const mockResultData = [
  { date: '10.09.2021', documentsCount: 5, riskCount: 2 },
  { date: '11.09.2021', documentsCount: 3, riskCount: 1 },
  { date: '12.09.2021', documentsCount: 8, riskCount: 0 },
  { date: '13.09.2021', documentsCount: 6, riskCount: 3 },
  { date: '14.09.2021', documentsCount: 7, riskCount: 2 },
  { date: '15.09.2021', documentsCount: 4, riskCount: 1 },
  { date: '16.09.2021', documentsCount: 5, riskCount: 2 },
  { date: '17.09.2021', documentsCount: 2, riskCount: 0 },
  { date: '18.09.2021', documentsCount: 9, riskCount: 4 },
  { date: '19.09.2021', documentsCount: 10, riskCount: 5 },
  { date: '20.09.2021', documentsCount: 3, riskCount: 1 },
  { date: '21.09.2021', documentsCount: 7, riskCount: 2 },
  { date: '22.09.2021', documentsCount: 5, riskCount: 0 },
  { date: '23.09.2021', documentsCount: 8, riskCount: 3 },
  { date: '24.09.2021', documentsCount: 4, riskCount: 1 },
  { date: '25.09.2021', documentsCount: 6, riskCount: 2 },
  { date: '26.09.2021', documentsCount: 9, riskCount: 4 },
  { date: '27.09.2021', documentsCount: 7, riskCount: 1 },
  { date: '28.09.2021', documentsCount: 8, riskCount: 3 },
  { date: '29.09.2021', documentsCount: 5, riskCount: 2 },
];

const ResultSlider: FunctionComponent = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(mockResultData.length <= 8);

  const handleSwiperInit = (swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  };

  const handleSlideChange = () => {
    if (!swiperInstance) return;

    setIsPrevDisabled(swiperInstance.isBeginning);
    setIsNextDisabled(swiperInstance.isEnd);
  };
  return (
    <section className={styles.resultSlider}>
      <h2 className={styles.heading}>Общая сводка</h2>
      <p className={styles.text}>Найдено 4 221 вариантов</p>
      <div className={styles.swiperWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Период</h3>
          <h3 className={styles.title}>Всего</h3>
          <h3 className={styles.title}>Риски</h3>
        </div>
        <Swiper
          modules={[Navigation, Keyboard]}
          slidesPerView={Math.min(mockResultData.length, 8)}
          spaceBetween={10}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            prevEl: `.${styles.btnPrev}`,
            nextEl: `.${styles.btnNext}`,
            enabled: true,
            hideOnClick: false,
          }}
          onInit={handleSwiperInit}
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 42,
            },
            526: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1063: {
              slidesPerView: 6,
            },
            1370: {
              slidesPerView: Math.min(mockResultData.length, 8),
            },
          }}
          className={styles.swiper}
        >
          {mockResultData.map((item, index) => (
            <SwiperSlide key={index} className={styles.resultCard}>
              <p className={styles.text}>{item.date}</p>
              <p className={styles.text}>{item.documentsCount}</p>
              <p className={styles.text}>{item.riskCount}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={clsx(styles.navBtn, styles.btnPrev)} disabled={isPrevDisabled}></button>
        <button className={clsx(styles.navBtn, styles.btnNext)} disabled={isNextDisabled}></button>
      </div>
    </section>
  );
};

export default ResultSlider;
