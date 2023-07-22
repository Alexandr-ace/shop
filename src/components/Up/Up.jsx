import React from "react";
import styles from "./Up.module.scss";
import stableOne from "./one";
import stableTwo from "./two";
const logo1 = require("./img/img8.png");

const Up = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        {stableOne.map((item) => (
          <div className={styles.center_one}>
            <img src={item.img} alt="" />
            <div>{item.text}</div>
          </div>
        ))}
        {stableTwo.map((item) => (
          <div className={styles.center_two}>
            <div>{item.text}</div>
          </div>
        ))}
        <div className={styles.center_three}>
          <img src={logo1} alt="" />
          <div>Москва, ул. Науки 25</div>
        </div>
      </div>
    </div>
  );
};

export default Up;
