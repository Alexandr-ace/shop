import React from "react";
import styles from "./Five.module.scss";
const logo1 = require("./img/img1.png");

const Five = () => {
  return (
    <div className={styles.main}>
      <form className={styles.center}>
        <input placeholder="Введите текст" type="text" />
        <button>
          <div>ИСКАТЬ</div>
          <img src={logo1} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Five;
