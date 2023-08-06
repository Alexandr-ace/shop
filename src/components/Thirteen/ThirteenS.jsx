import React from "react";
import styles from "./Thirteen.module.scss";
const logo1 = require("./img/img1.png");
const logo2 = require("./img/img2.png");
const logo3 = require("./img/img3.png");
const logo4 = require("./img/img4.png");

const Thirteen = () => {
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
          <div className={styles.center_two_weight}>Информация</div>
          <div>О компании</div>
          <div>Контакты</div>
          <div>Акции</div>
          <div>Магазины</div>
        </div>
        <div className={styles.center_three}>
          <div className={styles.center_three_weight}>Интернет-Магазин</div>
          <div>Доставка и самовывоз</div>
          <div>Оплата</div>
          <div>Возврат-обмен</div>
          <div>Новости</div>
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
