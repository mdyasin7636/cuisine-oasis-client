import { useEffect, useState } from "react";
import SingleRecipeCard from "../SingleRecipeCard/SingleRecipeCard";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Recipes</h1>
      <div className="my-16 flex flex-wrap gap-4">
        {recipes.slice(0, 6).map((recipe) => (
          <SingleRecipeCard
            key={recipe._id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
