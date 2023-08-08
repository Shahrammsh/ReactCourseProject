import { Link, Outlet } from "react-router-dom";
import "../i18n";
import { resources } from "../utils/utilities";
import { useTranslation } from "react-i18next";
import styles from "../assests/CSS/layout.module.css";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
const Layout = () => {
  const [t, i18n] = useTranslation();
  const langRadios = [];

  const handleChecked = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  let index = 0;

  for (const x in resources) {
    index++;
    langRadios.push(
      <FormControlLabel key={index} value={x} control={<Radio />} label={x} />
    );
  }

  return (
    <>
      <div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="fa"
          name="radio-lang-group" 
          row ={true}
          onChange={ handleChecked}
          >
          {langRadios}
        </RadioGroup>
        ;
      </div>
      <div className={styles["" + i18n.dir() + ""]}>
        <nav>
          <ul>
            <li>
              <Link to="/Home">صفحه اصلی</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/Personnel">مدیریت پرسنل</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/ContactUs">تماس با ما</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
