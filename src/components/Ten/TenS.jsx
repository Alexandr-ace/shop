import React from "react";
import styles from "./TenS.module.scss";

const TenS = () => {
  const logo2 = require("./img/img2.png");
  const logo3 = require("./img/img3.png");
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_up}>
          Cкидки на все запчасти <br /> до 70%
        </div>
        <div className={styles.center_bottom}>
          <img src={logo2} alt="" />
          <div className={styles.center_bottom_text}>ПОСМОТЕТЬ ВСЕ</div>
          <img src={logo3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TenS;
