import React from "react";
import styles from "./Up.module.scss";
import stableOne from "./one";
import stableTwo from "./two";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeStyle } from "../../store/styleSlice";
const logo1 = require("./img/img8.png");

const Up = () => {
  const dispatch = useDispatch();
  const removeUp = () => {
    dispatch(removeStyle());
  };
  const style = useSelector((state) => state.style.style);
  return (
    <div className={`${styles.main} ${style}`}>
      <div className={styles.center}>
        {stableOne.map((item) => (
          <div key={item.text} className={styles.center_one}>
            <img src={item.img} alt="" />
            <div>{item.text}</div>
          </div>
        ))}
        {stableTwo.map((item) => (
          <div key={item.text} className={styles.center_two}>
            <div>{item.text}</div>
          </div>
        ))}
        <div className={styles.center_three}>
          <img onClick={removeUp} src={logo1} alt="" />
          <div>Москва, ул. Науки 25</div>
        </div>
      </div>
    </div>
  );
};

export default Up;
