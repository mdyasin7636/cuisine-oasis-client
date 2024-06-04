/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleRecipeCard = ({ recipe }) => {
  const { _id, name, imageUrl, ingredients } =
    recipe;

  return (
    <div className="card w-80 bg-base-100 shadow-lg shadow-black hover:scale-105 duration-500">
      <figure className="px-4 py-4">
        <img
          src={imageUrl}
          alt="Recipe"
          className="rounded-xl shadow-md shadow-black"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name}</h2>
        <h3 className="text-xl font-normal">Ingredients: {ingredients}</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-outline">
            <Link to={`/products/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeCard;
