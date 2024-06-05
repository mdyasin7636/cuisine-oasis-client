import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyRecipes = () => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, [user]);

  console.log(recipes);

  return (
    <div className="grid grid-cols-2 gap-8 mx-4 my-4">
      {recipes.map((recipe) => (
        <div className="card card-side bg-base-100 shadow-xl" key={recipe._id}>
          <figure className="w-80">
            <img className="rounded-lg" src={recipe.imageUrl} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.recipeName}</h2>
            <p className="font-medium">Ingredients: {recipe.ingredients}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRecipes;
