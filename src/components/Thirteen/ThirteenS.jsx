import React, { useState } from "react";
import styles from "./ThirteenS.module.scss";
const logo1 = require("./img/img1.png");
const logo2 = require("./img/img2.png");
const logo3 = require("./img/img3.png");
const logo4 = require("./img/img4.png");
const logo5 = require("./img/img5.png");

const Thirteen = () => {
  const [supTwoStyles, setSupTwoStyles] = useState(styles.center_two_text);
  const toggleTwo = () => {
    if (supTwoStyles === styles.center_two_texts) {
      setSupTwoStyles(styles.center_two_text);
    } else {
      setSupTwoStyles(styles.center_two_texts);
    }
  };
  const [supStyles, setSupStyles] = useState(styles.center_three_text);
  const toggle = () => {
    if (supStyles === styles.center_three_texts) {
      setSupStyles(styles.center_three_text);
    } else {
      setSupStyles(styles.center_three_texts);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_one}>
          <div className={styles.center_one_text}>
            Подпишитесь на нашу рассылку и узнавайте о акция быстрее
          </div>
          <form className={styles.center_one_form}>
            <input type="text" placeholder="Введите ваш e-mail:" />
            <button>ОТПРАВИТЬ</button>
          </form>
        </div>
        <div className={styles.center_two}>
          <div className={styles.center_two_weight}>
            <div>Информация</div>
            <img
              onClick={() => {
                toggleTwo();
              }}
              src={logo5}
              alt=""
            />
          </div>
          <div className={supTwoStyles}>О компании</div>
          <div className={supTwoStyles}>Контакты</div>
          <div className={supTwoStyles}>Акции</div>
          <div className={supTwoStyles}>Магазины</div>
        </div>
        <div className={styles.center_three}>
          <div className={styles.center_three_weight}>
            <div>Интернет-магазин</div>
            <img
              onClick={() => {
                toggle();
              }}
              src={logo5}
              alt=""
            />
          </div>
          <div className={supStyles}>Доставка и самовывоз</div>
          <div className={supStyles}>Оплата</div>
          <div className={supStyles}>Возврат-обмен</div>
          <div className={supStyles}>Новости</div>
        </div>
        <div className={styles.center_four}>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Thirteen;
