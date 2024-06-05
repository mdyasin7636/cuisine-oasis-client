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
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../pages/EditProfile/EditProfile";
import AddRecipe from "../pages/AddRecipe/AddRecipe";
import EditRecipe from "../pages/EditRecipe/EditRecipe";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import MyRecipesDashboard from "../pages/MyRecipesDashboard/MyRecipesDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://cuisine-oasis-server.vercel.app/recipes"),
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({ params }) =>
          fetch(`https://cuisine-oasis-server.vercel.app/recipes/${params.id}`),
      },
      {
        path: "all-recipes",
        element: <AllRecipes></AllRecipes>,
      },
      {
        path: "my-recipes",
        element: <MyRecipes></MyRecipes>,
      },
      {
        path: "faq",
        element: <Question></Question>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "profile/edit/:id",
        element: <EditProfile></EditProfile>,
        loader: ({ params }) =>
          fetch(
            `https://cuisine-oasis-server.vercel.app/user/get/${params.id}`
          ),
      },
      {
        path: "add-recipe",
        element: <AddRecipe></AddRecipe>,
      },
      {
        path: "my-recipe",
        element: <MyRecipesDashboard></MyRecipesDashboard>,
      },
      {
        path: "my-recipe/edit/:id",
        element: <EditRecipe></EditRecipe>,
        loader: ({ params }) =>
          fetch(`https://cuisine-oasis-server.vercel.app/recipes/${params.id}`),
      },
    ],
  },
]);
