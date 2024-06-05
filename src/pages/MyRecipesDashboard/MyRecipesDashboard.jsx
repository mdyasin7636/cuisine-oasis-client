import { useEffect, useState } from "react";
import SingleRecipeCardDashboard from "../SingleRecipeCardDashboard/SingleRecipeCardDashboard";
import useAuth from "../../hooks/useAuth";

const MyRecipesDashboard = () => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://cuisine-oasis-server.vercel.app/recipes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, [user]);

  console.log(recipes);

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe._id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">My Recipes</h1>
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

export default MyRecipesDashboard;
