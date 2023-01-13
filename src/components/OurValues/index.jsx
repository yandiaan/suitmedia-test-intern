import React from "react";
import styles from "./OurValues.module.css";
import { ourValuesData } from "./ourValuesData";

const OurValues = () => {
  return (
    <div className={styles.ourValues}>
      <h1>OUR VALUES</h1>
      <div className={styles.values}>
        {ourValuesData.map(({ icon, title, desc, bg, border }, index) => {
          return (
            <div className={styles.cardContainer} key={title}>
              <div
                className={styles.cardValues}
                style={{ backgroundColor: bg, border: `2px solid ${border}` }}
              >
                <img src={`/img/${icon}`} width={25} alt="bulb" />
                <h1>{title}</h1>
                <p>{desc}</p>
              </div>
              {index !== ourValuesData.length - 1 ? (
                <div
                  className={styles.triangle}
                  style={{ borderLeft: `30px solid ${border}` }}
                ></div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurValues;
