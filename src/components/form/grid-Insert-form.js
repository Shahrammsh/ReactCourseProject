import { react } from "react";

import "../../i18n";
import { useTranslation } from "react-i18next";
const InsertForm = ({ url, className, onSave, onClose, children }) => {

  const [t, i18n] = useTranslation();  


  return (
    <>
      <div className={className}>
        <div>{children}</div>      
      </div>
      <br />
    </>
  );
};
export default InsertForm;
