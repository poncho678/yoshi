import { useSwiper } from "swiper/react";
import styles from "./CustomArrowPrev.module.css";

function CustomArrowPrev() {
  const swiper = useSwiper();

  const slidePrev = () => {
    swiper.slidePrev();
  };

  return <div onClick={slidePrev} className={styles.arrowPrev}></div>;
}

export default CustomArrowPrev;
