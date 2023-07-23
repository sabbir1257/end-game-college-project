import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import About from "../Pages/About";
import College from "../Pages/College";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/singup',
          element: <SingUp/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/colleges',
          element: <College/>
        },
        {
          path: '/admission',
          element: <Admission/>
        },
        {
          path: '/my-college',
          element: <MyCollege/>
        }
      ]
    },
  ]);

  export default router;