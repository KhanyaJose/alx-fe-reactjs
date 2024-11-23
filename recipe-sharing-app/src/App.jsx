import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const router = createBrowserRouter([
  { path: "/", element: <RecipeList /> },
  { path: "/recipe/:id", element: <RecipeDetails /> },
  { path: "/add", element: <AddRecipeForm /> },
  { path: "/edit/:id", element: <EditRecipeForm /> },
  { path: "/favorites", element: <FavoritesList /> },
  { path: "/recommendations", element: <RecommendationsList /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
