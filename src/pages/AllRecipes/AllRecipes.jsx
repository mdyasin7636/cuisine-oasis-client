import { useEffect, useState } from "react";
import SingleRecipeCard from "../SingleRecipeCard/SingleRecipeCard";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.recipeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold text-center">All Recipes</h1>
      <div className="text-center my-4">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered w-full max-w-xs mt-2"
        />
      </div>
      <div className="my-16 flex flex-wrap gap-4">
        {filteredRecipes.map((recipe) => (
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
