import React from "react";
import GridColumn from "./grid-column";
import styles from "../../assests/CSS/grid-view.module.css";
const GridRow = ({ columnObject }) => {
  const properties = () => {
    const cols = [];
    for (let x in columnObject) {        
      cols.push(x);
    }
    return cols;
  };

  const cols = properties().map((item, index) => {
    return <GridColumn key={index} value={columnObject[item]}></GridColumn>;
  });

  return <div className={styles["body-wapper"]}>{cols}</div>;
};
export default GridRow;
