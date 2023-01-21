import SingleProjectImage from "./SingleProjectImage";
import Slider from "react-slick";
import styles from "./Stills.module.css";

function Stills({ stills = [] }) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    variableWidth: true,
    speed: 0,
  };
  if (stills === null || stills.length === 0) {
    return;
  }

  return (
    <section className={styles.stillsWrapper}>
      <Slider {...settings}>
        {stills.map((still) => {
          console.log(still.asset.metadata.dimensions.width);
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
