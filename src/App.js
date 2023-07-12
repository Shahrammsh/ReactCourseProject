import './App.css';
import {ContactUs, ErrorPage, Layout } from './pages';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path:"/" ,
      element:<Layout />,
      errorElement:<ErrorPage />
    } , 
    {
      path: "./pages/contact-us.js" ,
      element: <ContactUs/> 
    }
]);
 
  return (
    <RouterProvider router={router} />  
  );
}

export default App;
