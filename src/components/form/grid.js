import React, { useState, useEffect } from "react";
import GridRow from "./grid-row";
import styles from "../../assests/CSS/grid-view.module.css";
import GridButton from "./grid-button";
import GridPagination from "./grid-pagination";
import { useTranslation } from "react-i18next";
import InsertForm from "./grid-Insert-form";
import axios from 'axios'
const Grid = ({ options, insertForm  }) => {
  console.log(options.insertButtonOnClick);
  const [t, i18n] = useTranslation();
  const [url, setUrl] = useState(options.url);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); 
  const [pageCount, setPageCount] = useState();
  const [isShowInsertForm, setIsShowInsertForm] = useState(false);

  useEffect(() => {   
    fetch(`${url}?_page=${currentPage}&&_limit=${options.numberRows}`).then(
      (response) => {
        setTotalCount(response.headers.get("X-Total-Count"));
        setPageCount( (totalCount % options.numberRows)> 0 ?
             Math.floor(totalCount / options.numberRows) + 1 :  
             Math.floor(totalCount / options.numberRows));
        response.json().then((result) => setData(result));
      }
    );
  }, [url, currentPage, totalCount]);

  const rows = data.map((item) => {
    return <GridRow columnObject={item}></GridRow>;
  });

  const handlerOnSave =(object)=>{

   axios.post(url, object) 
        .then(response => {           
            setIsShowInsertForm(false);                     
        });      
  }
  const handlerButtonClick = () => {
    setIsShowInsertForm(true);
  };

  return (
    <>
      <div>
        {isShowInsertForm ? (
          <InsertForm
            className={`${
              styles["insert-form"] + " " + styles["" + i18n.dir() + ""]
            }`}
            onSave={handlerOnSave}
            onClose={()=>setIsShowInsertForm(false)}
          >
            {insertForm}
          </InsertForm>
        ) : null}
      </div>
      <div className={styles["" + i18n.dir() + ""]}>
        {options.allowInsert ? (
          <GridButton
            title={t("NEW_INSERT_BUTTON_LABEL")}
            onclick={handlerButtonClick}
          ></GridButton>
        ) : null}
        <div className={`${styles["grid-container"]}`}> {rows}</div>
        {options.allowPagination ?? (
          <GridPagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPagingClick={(pageNo) => setCurrentPage(pageNo)}
          ></GridPagination>
        )}
      </div>
    </>
  );
};
export default Grid;
