import React, { useEffect } from "react";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "../../i18n";
import { useTranslation } from "react-i18next";

const GridPagination = (props) => {
  const [current, setCurrent] = useState(props.currentPage);
  const [t, i18n] = useTranslation();
  useEffect(
    function () {
      if (typeof props.onPagingClick === "function") {
        props.onPagingClick(current);
      }
    },
    [current, props]
  );

  const buttons = [];  
  const handlePagingClick = (event, pageNumber) => {
    console.log(pageNumber);
    if (pageNumber >= 1 && pageNumber <= props.pageCount)
      setCurrent(pageNumber);
  };
  for (let i = 1; i <= props.pageCount; i++) {
    buttons.push(
      <button key={i} value={i} id={i} onClick={handlePagingClick}>
        {i}
      </button>
    );
  }
  return (
    <>
      <Pagination
        count={props.pageCount}
        page={current}
        onChange={handlePagingClick}
        showLastButton
        showFirstButton
      />
    </>
  );
};

export default GridPagination;
