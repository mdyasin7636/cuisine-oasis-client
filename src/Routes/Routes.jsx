import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllRecipes from "../pages/AllRecipes/AllRecipes";
import MyRecipes from "../pages/MyRecipes/MyRecipes";
import Question from "../pages/Question/Question";
import Dashboard from "../pages/Dashboard/Dashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/all-recipes",
            element: <AllRecipes></AllRecipes>
        },
        {
            path: "/my-recipes",
            element: <MyRecipes></MyRecipes>
        },
        {
            path: "/faq",
            element: <Question></Question>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "",
            element: <Dashboard></Dashboard>
        },
      ]
    },
  ]);