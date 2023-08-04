import React, { useEffect, useState, Children, cloneElement } from "react";
import "./Carusel.css";

export const Carusel = ({ children }) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: { height: "100%", minWidth: "100%", maxWidth: "100%" },
        });
      })
    );
  }, []);
  return (
    <div className="main-container">
      <div className="window">
        <div className="all-pages-container">{pages}</div>
      </div>
    </div>
  );
};

export default Carusel;
