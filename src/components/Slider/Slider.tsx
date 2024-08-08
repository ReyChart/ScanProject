import { FunctionComponent } from 'react';
import { sliderItems } from '@/data/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';

import 'swiper/scss';
import styles from './Slider.module.scss';

const Slider: FunctionComponent = () => {
  return (
    <section className={styles.slider}>
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
          className={styles.swiper}
        >
          {sliderItems.map((benefit, index) => (
            <SwiperSlide key={index} className={styles.benefitCard}>
              <img src={benefit.img} alt={benefit.alt} className={styles.benefitImg} />
              <p className={styles.benefitText}>{benefit.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={styles.btnPrev} aria-label="Previous slide"></button>
        <button className={styles.btnNext} aria-label="Next slide"></button>
      </div>
    </section>
  );
};

export default Slider;
