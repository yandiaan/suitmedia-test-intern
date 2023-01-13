import React, { useRef, useEffect, useState } from "react";

import { carouselData } from "./carouselData";

import styles from "./Carousel.module.css";
import CarouselControl from "./CarouselControl";

const Carousel = () => {
  const carouselRef = useRef(null);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    carouselRef.current.style.width = `${carouselData.length * 100}%`;
    if (pos === 0) {
      carouselRef.current.style.left = "0";
    } else if (pos === carouselData.length) {
      setPos(0);
    } else if (pos < 0) {
      setPos(carouselData.length - 1);
    } else {
      carouselRef.current.style.left = `-${pos * 100}%`;
    }
  }, [pos]);

  return (
    <div className={styles.carousel}>
      <div ref={carouselRef} className={styles.carouselInner}>
        {carouselData.map(({ src, text }) => {
          return (
            <div className={styles.carouselItem} key={text}>
              <img src={`/img/${src}`} width={"100%"} height={"100%"} alt="" />
              <h1 className={styles.carouselCaption}>{text}</h1>
            </div>
          );
        })}
      </div>
      <CarouselControl pos={pos} setPos={setPos} />
      <div className={styles.carouselNav}>
        {carouselData.map((_, index) => {
          return (
            <span
              key={index}
              className={index === pos ? styles.active : ""}
              onClick={() => {
                setPos(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
