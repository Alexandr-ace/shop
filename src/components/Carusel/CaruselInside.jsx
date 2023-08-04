import React from "react";
import Carusel from "./Carusel";
import "./styles.css";

const CaruselInside = () => {
  return (
    <Carusel>
      <div className="item item-1">item 1</div>
      <div className="item item-2">item 2</div>
      <div className="item item-3">item 3</div>
    </Carusel>
  );
};

export default CaruselInside;
