import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditRecipe = () => {
  const recipes = useLoaderData();

  const [name, setName] = useState(recipes.name);
  const [imageUrl, setImageUrl] = useState(recipes.imageUrl);
  const [ingredients, setIngredients] = useState(recipes.ingredients);
  const [instructions, setInstructions] = useState(recipes.instructions);
  const [cookingTime, setCookingTime] = useState(recipes.cookingTime);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const ingredients = form.ingredients.value;
    const instructions = form.instructions.value;
    const cookingTime = form.cookingTime.value;

    const data = { name, imageUrl, ingredients, instructions, cookingTime };
    // console.log(data);

    await fetch(`http://localhost:5000/recipes/${recipes._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Recipe has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit Recipe</h1>
      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="imageUrl"
              placeholder="ImageURL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="instructions"
              placeholder="Instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="cookingTime"
              placeholder="Cooking Time"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="btn w-full bg-red-500 text-white p-4"
              type="submit"
              value="Edit Recipe"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;
