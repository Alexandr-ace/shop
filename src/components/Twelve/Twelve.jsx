import React from "react";
import styles from "./Twelve.module.scss";
import TwelveBlock from "./TwelveBlock";
import stableOne from "./one";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Twelve = () => {
  return (
    <div className={styles.main}>
      <FaChevronLeft />
      <div className={styles.center}>
        {stableOne.map((item) => (
          <TwelveBlock
            key={item.text}
            sale={item.sale}
            img={item.img}
            text={item.text}
            prise={item.prise}
            availabil={item.availabil}
          />
        ))}
      </div>
      <FaChevronRight />
    </div>
  );
};

export default Twelve;
