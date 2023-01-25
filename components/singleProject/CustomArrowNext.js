import { useSwiper } from "swiper/react";
import styles from "./CustomArrowNext.module.css";

function CustomArrowNext() {
  const swiper = useSwiper();

  const slideNext = () => {
    swiper.slideNext();
  };

  return <div onClick={slideNext} className={styles.arrowNext}></div>;
}

export default CustomArrowNext;
