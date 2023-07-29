import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import About from "../Pages/About";
import College from "../Pages/College";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";
import Error from "../Pages/Error";
import AdmitForm from "../Pages/AdmitForm";
import CollegeViewDetails from "../Pages/CollegeViewDetails";
import PrivateRoute from "../Providers/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/colleges",
        element: <College />,
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-college",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
      {
        path: "/college-view/:id",
        element: <CollegeViewDetails />,
      },
      {
        path: "/admitForm",
        element: <AdmitForm />,
      },
    ],
  },
]);

export default router;
