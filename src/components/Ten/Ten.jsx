import React from "react";
import styles from "./Ten.module.scss";

const Ten = () => {
  const logo1 = require("./img/img1.png");
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_left}>
          <img src={logo1} alt="" />
        </div>
        <div className={styles.center_center}>
          <div className={styles.center_center_wordF}>СКИДКИ</div>
          <div className={styles.center_center_wordS}>на все запчасти</div>
          <div className={styles.center_center_wordT}> до 70%</div>
        </div>
        <div className={styles.center_right}>Посмотреть всё</div>
      </div>
    </div>
  );
};

export default Ten;
