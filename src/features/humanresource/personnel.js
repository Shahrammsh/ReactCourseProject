import React from "react";
import { Grid, InsertForm } from "../../components";
import { useState } from "react";
import NewPersonnel from "./new-personnel";

const Personnel = () => {
  const [gridOptions, setGridOptions] = useState({
    url: "http://localhost:3001/personnels",
    columnItem: [
      {
        name: "id",
        title: "شناسه",
        isEditable: false,
        type: Number,
        isFilterable: false,
        isSortable: true,
      },
      {
        name: "firstName",
        title: "نام",
        isEditable: false,
        type: String,
        isFilterable: false,
        isSortable: true,
      },
      {
        name: "lastName",
        title: "نام خانوادگی",
        isEditable: false,
        String,
        isFilterable: false,
        isSortable: true,
      },
      {
        name: "age",
        title: "سن",
        isEditable: false,
        String,
        isFilterable: false,
        isSortable: true,
      },
    ],
    height: 450,
    width: 800,
    numberRows: 10,
    allowInsert: true,
  });

  return (
    <>
      <Grid options={gridOptions}><NewPersonnel></NewPersonnel></Grid>
    </>
  );
};

export default Personnel;
