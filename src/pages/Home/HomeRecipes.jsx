/* eslint-disable react/prop-types */
import HomeRecipeCard from "./HomeRecipeCard";

const HomeRecipes = ({ recipes }) => {
  return (
    <div>
      <h1 className="my-12 text-4xl font-bold text-center">Recipes</h1>
      <div className="grid md:grid-cols-3 gap-12 md:ml-16 sm:ml-12">
        {recipes.slice(0, 6).map((recipe) => (
          <HomeRecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomeRecipes;
