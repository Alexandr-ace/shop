import React from "react";
import styles from "./SixInside.module.scss";
const logo1 = require("./img/img1.png");
const logo2 = require("./img/img2.png");

const SixInside = () => {
  return (
    <div className={styles.center}>
      <div className={styles.center_left}>
        <div>Квадрациклы</div>
        <div>
          <div>Подробее</div>
          <img src={logo1} alt="" />
        </div>
      </div>
      <div className={styles.center_right}>
        <img src={logo2} alt="" />
      </div>
    </div>
  );
};

export default SixInside;
