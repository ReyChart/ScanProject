import { FunctionComponent } from 'react';
import clsx from 'clsx';
import { benefitSliderItems } from '@/data/constants';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';

import 'swiper/scss';
import styles from './BenefitSlider.module.scss';

const BenefitSlider: FunctionComponent = () => {
  return (
    <section className={styles.benefitSlider}>
      <h2 className={styles.heading}>Почему именно мы</h2>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, Autoplay, Keyboard]}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            nextEl: `.${styles.btnNext}`,
            prevEl: `.${styles.btnPrev}`,
            enabled: true,
            hideOnClick: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            807: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1135: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={styles.swiper}
        >
          {benefitSliderItems.map((benefit, index) => (
            <SwiperSlide key={index} className={styles.benefitCard}>
              <img src={benefit.img} alt={benefit.alt} className={styles.benefitImg} />
              <p className={styles.benefitText}>{benefit.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={clsx(styles.navBtn, styles.btnPrev)}
          aria-label="Previous slide"
        ></button>
        <button className={clsx(styles.navBtn, styles.btnNext)} aria-label="Next slide"></button>
      </div>
    </section>
  );
};

export default BenefitSlider;
