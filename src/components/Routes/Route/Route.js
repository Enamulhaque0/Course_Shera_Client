import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Course from "../../Pages/Courses/Course/Course";
import Checkout from "../../Pages/Checkout/Checkout";
import NotFound from "../../Pages/NotFound/NotFound";
import Home from "../../Pages/Home/Home";
import PrivateRoute from "../PrivetRoute/PrivetRoute";
import FAQ from "../../Pages/FAQ/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",

        element: <Home></Home>,
      },

      {
        path: "courses",
        loader: ()=> fetch("https://y-enamulhaque0.vercel.app/courses"),
        element: <Courses></Courses>,
      },

      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "course/:id",
        loader: ({params})=> fetch(`https://y-enamulhaque0.vercel.app/course/${params.id}`),
        element: <Course></Course>,
      },
      {
        path: "checkout/:id",
        loader: ({params})=> fetch(`https://y-enamulhaque0.vercel.app/checkout/${params.id}`),
        element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>,
      }
    ],
  },
]);
