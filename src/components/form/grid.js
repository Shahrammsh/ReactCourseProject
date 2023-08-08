import React, { useState, useEffect, cloneElement } from "react";
import GridRow from "./grid-row";
import styles from "../../assests/CSS/grid-view.module.css";
import GridButton from "./grid-button";
import GridPagination from "./grid-pagination";
import { useTranslation } from "react-i18next";
import InsertForm from "./grid-Insert-form";
import axios from "axios";
const Grid = ({ options, children }) => {
  const [t, i18n] = useTranslation();
  const [url, setUrl] = useState(options.url);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState();
  const [isShowInsertForm, setIsShowInsertForm] = useState(false);
  const [newData, setNewData] = useState({});

  useEffect(() => {
    fetch(`${url}?_page=${currentPage}&&_limit=${options.numberRows}`).then(
      (response) => {
        setTotalCount(response.headers.get("X-Total-Count"));
        setPageCount(
          totalCount % options.numberRows > 0
            ? Math.floor(totalCount / options.numberRows) + 1
            : Math.floor(totalCount / options.numberRows)
        );
        response.json().then((result) => setData(result));
      }
    );
  }, [url, currentPage, totalCount]);

  useEffect(() => {
    if (Object.keys(newData).length !== 0) {
      axios.post(url, newData).then((response) => {
        setIsShowInsertForm(false);
      });
    }
  }, [newData]);

  const columnTitle = options.columnItem.map((item) => item.title);
  const columnsId = options.columnItem.map((item) => item.name);

  const rows = data.map((item, index) => {
    let newObject = {};
    columnsId.map((element) => {
      newObject[element] = item[element] ? item[element] : null;
    });
    return <GridRow key={index} columnObject={newObject}></GridRow>;
  });

  const newElement = cloneElement(children, {
    onSubmit: (object) => setNewData(object),
    onClose: () => setIsShowInsertForm(false),
  });

  return (
    <>
      <div>
        {isShowInsertForm ? (
          <InsertForm
            className={`${
              styles["insert-form"] + " " + styles["" + i18n.dir() + ""]
            }`}
            onClose={() => setIsShowInsertForm(false)}
          >
            {newElement}
          </InsertForm>
        ) : null}
      </div>
      <div className={styles["" + i18n.dir() + ""]}>
        {options.allowInsert ? (
          <GridButton
            title={t("NEW_INSERT_BUTTON_LABEL")}
            onclick={() => setIsShowInsertForm(true)}
          ></GridButton>
        ) : null}

        <div className={`${styles["grid-container"]}`}>
          <GridRow columnObject={columnTitle}></GridRow>
          {rows}
        </div>
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
