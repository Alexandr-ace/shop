import React from "react";
import styles from "./SixInside.module.scss";
const logo1 = require("./img/img1.png");

const SixInside = ({ text, img }) => {
  return (
    <div className={styles.center}>
      <div className={styles.center_left}>
        <div className={styles.center_left_machine}>{text}</div>
        <div className={styles.center_left_option}>
          <div>Подробее</div>
          <img src={logo1} alt="" />
        </div>
      </div>
      <div className={styles.center_right}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default SixInside;
