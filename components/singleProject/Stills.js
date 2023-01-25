import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingleProjectImage from "./SingleProjectImage";

import styles from "./Stills.module.css";
import "swiper/css/navigation";
import CustomArrowNext from "./CustomArrowNext";
import CustomArrowPrev from "./CustomArrowPrev";

function Stills({ stills = [] }) {
  if (stills === null || stills.length === 0) {
    return;
  }

  return (
    <section className={styles.slideshowWrapper}>
      <Swiper
        modules={[Navigation]}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
      >
        <CustomArrowNext />
        <CustomArrowPrev />
        {stills.map((still) => {
          return (
            <SwiperSlide key={still._key}>
              <SingleProjectImage image={still} />
              <p className={styles.description}>{still.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Stills;
