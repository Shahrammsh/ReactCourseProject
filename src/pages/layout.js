import {Link, Outlet} from "react-router-dom" ;
const Layout = () => {
  return (

    <>
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
