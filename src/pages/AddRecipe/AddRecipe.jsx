import Swal from "sweetalert2";

const AddRecipe = () => {
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

    await fetch("http://localhost:5000/recipes", {
      method: "POST",
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
          title: "Your Recipe has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add a Recipe</h1>
      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="imageUrl"
              placeholder="ImageURL"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="ingredients"
              placeholder="Ingredients"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="instructions"
              placeholder="Instructions"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="cookingTime"
              placeholder="Cooking Time"
            />
          </div>
          <div className="mt-2">
            <input
              className="btn w-full bg-red-500 text-white p-4"
              type="submit"
              value="Add Recipe"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
