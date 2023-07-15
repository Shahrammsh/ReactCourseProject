import {Link, Outlet} from "react-router-dom" ;
import '../i18n' ;
import {resources} from '../utils/utilities';
import {} from '';

const Layout = () => {


 const langRadios = [] ;

 for(const x in resources){  
    langRadios.push(<label><input type='radio' name={x} />{x}</label>);
 }
  
  return (
    <>
    <div> 
    {langRadios}
    </div>
    <nav> 
      <ul> 
        <li> 
          <Link to="/Home" >صفحه اصلی</Link>
        </li>
      </ul>
      <ul> 
        <li> 
          <Link to="/Personnel" >مدیریت پرسنل</Link>
        </li>
      </ul>
      <ul> 
        <li> 
          <Link to="/ContactUs">تماس با ما</Link>
        </li>
      </ul>
    </nav>
    <Outlet></Outlet>
    </>
   
  );
};

export default Layout;
