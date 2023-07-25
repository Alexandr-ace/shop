import React from "react";
import styles from "./Four.module.scss";

const Four = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_word}>Поиск по номеру</div>
        <div className={styles.center_word}>Поиск по марке</div>
        <div className={`${styles.center_word} ${styles.center_words}`}>
          Поиск по названию товара
        </div>
      </div>
    </div>
  );
};

export default Four;
