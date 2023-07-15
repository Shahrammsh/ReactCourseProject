import './App.css';
import {ErrorPage, Layout , Home, ContactUs} from './pages';
import {Personnel} from "./features" ;
import {RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {
  
  const router = createBrowserRouter([
    {
      path:"/" ,
      element:<Layout />,
      children :[
        {
          path:"Home" ,
          element:<Home />
        } ,
        {
          path:"Personnel" ,
          element: <Personnel></Personnel>
        } ,
        {
          path:"ContactUs" ,
          element:<ContactUs></ContactUs>
        }
      ],
      errorElement:<ErrorPage />
    } 
]);
 
  return (
    <RouterProvider router={router} />  
  );
}

export default App;
