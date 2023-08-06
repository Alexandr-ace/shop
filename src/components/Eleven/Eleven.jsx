import React from "react";
import styles from "./Eleven.module.scss";

const Eleven = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_up}>С этим товаром покупают</div>
        <div className={styles.center_bottom}>
          <div className={styles.center_bottom_block}>Запчасти</div>
          <div className={styles.center_bottom_block}>Моторы</div>
          <div className={styles.center_bottom_block}>Шины </div>
          <div className={styles.center_bottom_block}>Электроника</div>
          <div className={styles.center_bottom_block}>Инструменты</div>
          <div className={styles.center_bottom_block}>Аксессуары</div>
        </div>
      </div>
    </div>
  );
};

export default Eleven;
