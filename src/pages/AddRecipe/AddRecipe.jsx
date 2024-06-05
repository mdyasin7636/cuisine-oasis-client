import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddRecipe = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const recipeName = form.recipeName.value;
    const imageUrl = form.imageUrl.value;
    const ingredients = form.ingredients.value;
    const instructions = form.instructions.value;
    const cookingTime = form.cookingTime.value;

    const newRecipe = {
      userName,
      email,
      recipeName,
      imageUrl,
      ingredients,
      instructions,
      cookingTime,
    };
    // console.log(data);

    await fetch("https://cuisine-oasis-server.vercel.app/recipes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
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
        form.reset();
      });
  };

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center">Add Recipe</h1>
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
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </div>
        <div className="md:w-2/4">
          <label className="label">
            <span className="label-text font-semibold">Instructions</span>
          </label>
          <textarea
            name="instructions"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </div>
        {/* price and rating row */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/4">
            <label className="label">
              <span className="label-text font-semibold">Cooking Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="cookingTime"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Add Recipe"
            className="btn btn-outline ml-48 mb-10 mt-5 "
          />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
