import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const recipes = useLoaderData();
  console.log(recipes);

  const { recipeName, imageUrl, ingredients, instructions, cookingTime } =
    recipes;

  return (
    <div>
      <h1 className="text-5xl text-center font-bold">{recipeName}</h1>
      <img className="h-[600px]" src={imageUrl} />
      <h3 className="text-2xl font-semibold">{ingredients}</h3>
      <h3 className="text-xl font-semibold">{instructions}</h3>
      <p className="text-lg font-light">{cookingTime}</p>
    </div>
  );
};

export default RecipeDetails;
