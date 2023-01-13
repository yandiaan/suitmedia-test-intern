import React from "react";
import styles from "./Carousel.module.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselControl = ({ pos, setPos }) => {
  return (
    <div className={styles.carouselControls}>
      <button
        className={styles.prev}
        onClick={() => {
          setPos(pos - 1);
          console.log(pos);
        }}
      >
        <IoIosArrowBack />
      </button>
      <button
        className={styles.next}
        onClick={() => {
          setPos(pos + 1);
          console.log(pos);
        }}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default CarouselControl;
