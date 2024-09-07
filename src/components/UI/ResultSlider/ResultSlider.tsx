import { FunctionComponent, useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Loader from '../Loader/Loader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation, Keyboard } from 'swiper/modules';

import { OverviewData } from '@/interfaces/data.interface';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { resetData, fetchOverviewData } from '@/redux/dataSlice';
import { variantsArray } from '@/data/constants';
import { normalizeCountText, formatDate } from '@/utils/supportFunctions';

import 'swiper/css';
import styles from './ResultSlider.module.scss';

const ResultSlider: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const overviewData = useAppSelector((state) => state.data.overviewData);
  const { overviewIsLoading } = useAppSelector((state) => state.data);
  const { data } = location.state;
  const variantsCount = useMemo(() => {
    return overviewData.reduce((acc: number, item: OverviewData) => acc + item.documentsCount, 0);
  }, [overviewData]);

  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(overviewData.length <= 8);
  const [isBigLoader, setIsBigLoader] = useState<boolean>(true);

  const handleSwiperInit = (swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  };

  const handleSlideChange = () => {
    if (!swiperInstance) return;

    setIsPrevDisabled(swiperInstance.isBeginning);
    setIsNextDisabled(swiperInstance.isEnd);
  };

  useEffect(() => {
    dispatch(resetData());
    dispatch(fetchOverviewData(data))
      .unwrap()
      .catch((error) => {
        console.error('Ошибка получения данных: ', error);
      });
  }, [dispatch, data]);

  useEffect(() => {
    const handleResize = () => {
      setIsBigLoader(window.innerWidth > 525);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.resultSlider}>
      <h2 className={styles.heading}>Общая сводка</h2>
      <p className={styles.text}>
        Найдено {`${variantsCount} ${normalizeCountText(variantsCount, variantsArray)}`}
      </p>
      <div className={styles.swiperWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Период</h3>
          <h3 className={styles.title}>Всего</h3>
          <h3 className={styles.title}>Риски</h3>
        </div>
        {overviewIsLoading ? (
          <Loader isBig={isBigLoader} />
        ) : !overviewData || overviewData.length === 0 ? (
          <p className={styles.textNoData}>Данные не найдены</p>
        ) : (
          <Swiper
            modules={[Navigation, Keyboard]}
            slidesPerView={Math.min(overviewData.length, 8)}
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
                slidesPerView: Math.min(overviewData.length, 1),
                spaceBetween: 42,
              },
              526: {
                slidesPerView: Math.min(overviewData.length, 2),
              },
              768: {
                slidesPerView: Math.min(overviewData.length, 4),
              },
              1063: {
                slidesPerView: Math.min(overviewData.length, 6),
              },
              1370: {
                slidesPerView: Math.min(overviewData.length, 8),
              },
            }}
            className={styles.swiper}
          >
            {overviewData.map((item, index) => (
              <SwiperSlide key={index} className={styles.resultCard}>
                <p className={styles.text}>{formatDate(item.date)}</p>
                <p className={styles.text}>{item.documentsCount}</p>
                <p className={styles.text}>{item.riskCount}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <button className={clsx(styles.navBtn, styles.btnPrev)} disabled={isPrevDisabled}></button>
        <button className={clsx(styles.navBtn, styles.btnNext)} disabled={isNextDisabled}></button>
      </div>
    </section>
  );
};

export default ResultSlider;
