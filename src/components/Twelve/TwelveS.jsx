import React, { useEffect } from "react";
import styles from "./TwelveS.module.scss";
import TwelveBlock from "./TwelveBlock";
import stableOneS from "./two";
import { useState } from "react";

const TwelveS = () => {
  const [time, setTime] = useState(0);
  const timer = () => {
    if (time === -460) {
      setTime(0);
    } else {
      setTime(time - 230);
    }
  };

  useEffect(() => {
    const tumer = setInterval(timer, 3000);

    return () => clearInterval(tumer);
  });

  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_slider}>
          <div
            style={{ transform: `translate(${time}px,0)` }}
            className={styles.center_slider_text}
          >
            {stableOneS.map((item) => (
              <TwelveBlock
                key={item.text}
                sale={item.sale}
                img={item.img}
                text={item.text}
                prise={item.prise}
                availabil={item.availabil}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwelveS;
