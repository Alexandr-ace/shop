import React from "react";
import styles from "./One.module.scss";
import stylesUp from "../Up/Up.module.scss";

import { useDispatch } from "react-redux";
import { addStyle } from "../../store/styleSlice";

const One = () => {
  const logo1 = require("./img/img1.png");
  const logo2 = require("./img/img2.png");
  const logo3 = require("./img/img3.png");
  const logo4 = require("./img/img4.png");
  const logo5 = require("./img/img5.png");
  const logo6 = require("./img/img6.png");
  const logo7 = require("./img/img7.png");
  const dispatch = useDispatch();
  const addUp = () => {
    dispatch(addStyle(stylesUp.mains));
  };
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div onClick={addUp} className={styles.center_ones}>
          <img src={logo6} alt="" />
        </div>
        <div className={styles.center_one}>
          <div>Магазины</div>
          <div>Акции</div>
          <div>Доставка и оплата</div>
        </div>
        <div className={styles.center_twos}>
          <img src={logo7} alt="" />
        </div>
        <div className={styles.center_two}>
          <img src={logo1} alt="" />
        </div>
        <div className={styles.center_three}>
          <img src={logo2} alt="" />
          <div>Москва, ул. Науки 25</div>
        </div>
        <div className={styles.center_four}>
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default One;
