import { react } from "react";

import "../../i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const InsertForm = ({ url, className, onSave, onClose, children }) => {
  console.log(children);

  const [t, i18n] = useTranslation();
  const [formData, setFormData] = useState({});
 
  console.log(children);

  const handlerOnSave = (e) => {
    let object = {};

    //onSave(object);
  };
  const handlerOnClose = () => {
    onClose();
  };
  return (
    <>
      <div className={className}>
        <div>{children}</div>
        <div>
          <button onClick={handlerOnSave}>{t("SAVE")}</button>
          <button onClick={handlerOnClose}>{t("CANCEL")}</button>
        </div>
      </div>
      <br />
    </>
  );
};
export default InsertForm;
