/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleRecipeCardDashboard = ({ recipe, onDelete }) => {
  const { _id, name, imageUrl, ingredients, instructions, cookingTime } =
    recipe;

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/recipes/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Recipe has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        onDelete(_id);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt="Recipe" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Recipe Name: {name}</h2>
        <h3 className="text-xl font-normal">Ingredients: {ingredients}</h3>
        <h3 className="text-xl font-normal">Instructions: ${instructions}</h3>
        <p>Cooking Time: {cookingTime}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/recipes/${_id}`}>See Details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeCardDashboard;
