import React from "react";
import styles from "./Eight.module.scss";
import EightBlock from "./EightBlock";
import stableOne from "./one";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Eight = () => {
  return (
    <div className={styles.main}>
      <FaChevronLeft />
      <div className={styles.center}>
        {stableOne.map((item) => (
          <EightBlock
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

export default Eight;
