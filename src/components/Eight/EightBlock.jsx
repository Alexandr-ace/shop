import React from "react";
import styles from "./EightBlock.module.scss";

const EightBlock = ({ sale, img, text, prise, availabil }) => {
  const logo1 = require("./img/img1.png");
  const logo2 = require("./img/img2.png");
  const logo3 = require("./img/img3.png");
  return (
    <div className={styles.main}>
      {availabil ? (
        <div className={styles.center}>
          <div className={styles.center_up}>
            <div className={styles.center_up_left}>{sale}</div>
            <div className={styles.center_up_right}>
              <img src={logo1} alt="" />
            </div>
          </div>
          <div className={styles.center_middle}>
            <div className={styles.center_middle_inside}>Посмотреть товар</div>
            <div className={styles.center_middle_img}>
              <img src={img} alt="" />
            </div>
            <div className={styles.center_middle_name}>{text}</div>
            <div className={styles.center_middle_price}>{prise} ₽</div>
          </div>
          <div className={styles.center_bottom}>
            <div className={styles.center_bottom_img}>
              <img src={logo3} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.center}>
          <div className={styles.center_up}>
            <div className={styles.center_up_left}>{sale}</div>
            <div className={styles.center_up_right}>
              <img src={logo1} alt="" />
            </div>
          </div>
          <div className={styles.center_middle}>
            <div className={styles.center_middle_inside}>Посмотреть товар</div>
            <div className={styles.center_middle_img}>
              <img src={img} alt="" />
            </div>
            <div className={styles.center_middle_namen}>{text}</div>
            <div className={styles.center_middle_not}>нет в наличии</div>
            <div className={styles.center_middle_input}>
              Сообщить о поступлении
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EightBlock;
