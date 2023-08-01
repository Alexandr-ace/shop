import React from "react";
import styles from "./Seven.module.scss";

const Seven = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_up}>Популярные товары</div>
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

export default Seven;
