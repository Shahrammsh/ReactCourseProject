import { Link, Outlet } from "react-router-dom";
import "../i18n";
import { resources } from "../utils/utilities";
import { useTranslation } from "react-i18next";
import styles from "../assests/CSS/layout.module.css";
const Layout = () => {
  const [t, i18n] = useTranslation();
  const langRadios = [];

  const handleChecked = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  let index =0 ;
  for (const value  in resources ) {
    index++;
    langRadios.push(
      i18n.language === value ? (
        <label key={index}>
          <input
            type="radio"
            value={value}
            name="radioLang"
            checked
            onChange={handleChecked}
          />
          {value}
        </label>
      ) : (
        <label key={index}>
          <input
            type="radio"
            value={value}
            name="radioLang"
            onChange={handleChecked}
          />
          {value}
        </label>
      )
    );
    
  }
 


  return (
    <>
      <div>{langRadios}</div>
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
