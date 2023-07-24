import React from "react";
import styles from "./Three.module.scss";
const logo1 = require("./img/img3.png");
const logo2 = require("./img/img4.png");
const logo3 = require("./img/img5.png");

const Three = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_left}>
          <img className={styles.center_left_center_left} src={logo1} alt="" />
          <img className={styles.center_left_center_right} src={logo2} alt="" />
          <div className={styles.center_left_center}>
            <div className={styles.center_left_center_imgs}></div>
            <div className={styles.center_left_center_img}></div>
            <div className={styles.center_left_center_img}></div>
            <div className={styles.center_left_center_img}></div>
            <div className={styles.center_left_center_img}></div>
          </div>
        </div>
        <div className={styles.center_right}>
          <div className={styles.center_right_up}>
            <div className={styles.center_right_up_left}>АКЦИЯ</div>
            <div className={styles.center_right_up_right}>190 000 ₽</div>
          </div>
          <div className={styles.center_right_price}>
            <div className={styles.center_right_price_stick}></div>
            <div className={styles.center_right_price_hidden}>225 000 ₽</div>
          </div>
          <div className={styles.center_right_middle}>
            <div>
              <img src={logo3} alt="" />
            </div>
            <div>Лодочный мотор Suzuki DF9.9BRS</div>
          </div>
          <div className={styles.center_right_bottom}>
            <div>Акция действует до</div>
            <div className={styles.center_right_bottom_number}>31.08.2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
