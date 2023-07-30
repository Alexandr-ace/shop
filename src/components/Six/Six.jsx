import React from "react";
import styles from "./Six.module.scss";
import SixInside from "./SixInside";
import stableOne from "./one";

const Six = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        {stableOne.map((item) => (
          <SixInside key={item.text} img={item.img} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Six;
