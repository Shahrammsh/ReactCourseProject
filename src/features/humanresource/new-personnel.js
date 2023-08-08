import React, { useState } from "react";
import "../../i18n";
import { useTranslation } from "react-i18next";

const NewPersonnel = ({ onSubmit, onClose }) => {
  const [t, i18n] = useTranslation();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const onChnageFormHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = () => {

    console.log("form submit");   
    
    onSubmit(data);
  };

  const handlerOnClose = () => {
    onClose();
  };

  return i18n.language === "fa" ? (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>نام :</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={onChnageFormHandler}
        ></input>
      </div>
      <div>
        <label>نام خانوادگی</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={onChnageFormHandler}
        ></input>
      </div>
      <div>
        <button type="submit">{t("SAVE")}</button>
        <button onClick={handlerOnClose}>{t("CANCEL")}</button>
      </div>
      <br />
    </form>
  ) : (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>First Name :</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={onChnageFormHandler}
        ></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={onChnageFormHandler}
        ></input>
      </div>
      <div>
        <button type="submit">{t("SAVE")}</button>
        <button onClick={handlerOnClose}>{t("CANCEL")}</button>
      </div>

      <br />
    </form>
  );
};
export default NewPersonnel;
