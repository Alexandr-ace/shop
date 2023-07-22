import React from "react";
import styles from "./Two.module.scss";

const Two = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_one}>Квадроциклы</div>
        <div className={styles.center_one}>Катера</div>
        <div className={styles.center_one}>Гидроциклы</div>
        <div className={styles.center_one}>Лодки</div>
        <div className={styles.center_one}>Вездеходы</div>
        <div className={styles.center_one}>Снегоходы</div>
        <div className={styles.center_one}>Двигатели</div>
        <div className={styles.center_one}>Запчасти</div>
        <div className={styles.center_two}>Магазины</div>
        <div className={styles.center_two}>Акции</div>
        <div className={styles.center_two}>Доставка и оплата</div>
      </div>
    </div>
  );
};

export default Two;
