/* eslint-disable react/prop-types */

const HomeRecipeCard = ({ recipe }) => {
  const { name, imageUrl } = recipe;

  return (
    <div className="card w-80 bg-base-100 shadow-lg shadow-black hover:scale-105 duration-500">
      <figure className="px-4 py-4">
        <img
          src={imageUrl}
          alt="Shoes"
          className="rounded-xl shadow-md shadow-black"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">{name}</h2>
      </div>
    </div>
  );
};

export default HomeRecipeCard;
