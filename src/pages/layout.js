import { Link, Outlet } from "react-router-dom";
import "../i18n";
import { resources } from "../utils/utilities";
import { useTranslation } from "react-i18next";
import styles from "../assests/CSS/layout.module.css";
const Layout = () => {
  const [t, i18n] = useTranslation();
  const langRadios = [];

  const handleChecked = (e) => {
    console.log(e);
    i18n.changeLanguage(e.target.value);
  };
  for (const x in resources) {
    langRadios.push(
      i18n.language === x ? (
        <label className ="">
          <input
            type="radio"
            value={x}
            name="radioLang"
            checked
            onChange={handleChecked}            
          />{x}
        </label>
      ) : (
        <label>
          <input
            type="radio"
            value={x}
            name="radioLang"
            onChange={handleChecked}
          />{x}
        </label>
      )
    );
  }
  return (
    <>
    <div> 
    {langRadios}
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
