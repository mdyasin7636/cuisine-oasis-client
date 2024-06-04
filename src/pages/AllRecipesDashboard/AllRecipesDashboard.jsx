import { useEffect, useState } from "react";
import SingleRecipeCardDashboard from "../SingleRecipeCardDashboard/SingleRecipeCardDashboard";

const AllRecipesDashboard = () => {
    const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe._id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="my-16 flex flex-wrap gap-4">
        {recipes.map((recipe) => (
          <SingleRecipeCardDashboard
            key={recipe._id}
            recipe={recipe}
            onDelete={handleDeleteRecipe}
          />
        ))}
      </div>
    </div>
  );
};

export default AllRecipesDashboard;