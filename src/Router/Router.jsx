import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import About from "../Pages/About";


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
        }
      ]
    },
  ]);

  export default router;