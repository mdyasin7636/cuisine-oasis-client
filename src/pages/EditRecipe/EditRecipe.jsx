import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const EditRecipe = () => {
  const { user } = useAuth();
  const recipes = useLoaderData();
  console.log(recipes);

  const [recipeName, setRecipeName] = useState(recipes.recipeName);
  const [imageUrl, setImageUrl] = useState(recipes.imageUrl);
  const [ingredients, setIngredients] = useState(recipes.ingredients);
  const [instructions, setInstructions] = useState(recipes.instructions);
  const [cookingTime, setCookingTime] = useState(recipes.cookingTime);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const recipeName = form.name.value;
    const imageUrl = form.imageUrl.value;
    const ingredients = form.ingredients.value;
    const instructions = form.instructions.value;
    const cookingTime = form.cookingTime.value;

    const data = {
      userName,
      email,
      recipeName,
      imageUrl,
      ingredients,
      instructions,
      cookingTime,
    };
    console.log(data);

    await fetch(
      `https://cuisine-oasis-server.vercel.app/recipes/${recipes._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
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
    <div className="">
      <h1 className="text-4xl font-bold text-center">Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text font-semibold">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="userName"
                readOnly
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/4 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                readOnly
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="recipeName"
                className="input input-bordered w-full"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control md:w-1/4 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:w-2/4">
          <label className="label">
            <span className="label-text font-semibold">Ingredients</span>
          </label>
          <textarea
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </div>
        <div className="md:w-2/4">
          <label className="label">
            <span className="label-text font-semibold">Instructions</span>
          </label>
          <textarea
            name="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </div>
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text font-semibold">Cooking Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="cookingTime"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Edit Recipe"
            className="btn btn-outline ml-48 mb-10 mt-5 "
          />
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
