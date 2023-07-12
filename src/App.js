import './App.css';
import {ContactUs, Layout } from './pages';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path:"/" ,
      element:<Layout />
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
