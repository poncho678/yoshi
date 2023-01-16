import SingleProjectImage from "./SingleProjectImage";
import Slider from "react-slick";
import styles from "./Stills.module.css";
import CustomArrowNext from "./CustomArrowNext";
import CustomArrowPrev from "./CustomArrowPrev";

function Stills({ stills = [] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    nextArrow: <CustomArrowNext />,
    prevArrow: <CustomArrowPrev />,
  };
  if (stills === null || stills.length === 0) {
    return;
  }

  return (
    <section className={styles.stillsWrapper}>
      <Slider {...settings}>
        {stills.map((still) => {
          console.log(still);
          return (
            <div key={still._key}>
              <SingleProjectImage image={still} />
              <p className={styles.description}>{still.description}</p>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default Stills;
