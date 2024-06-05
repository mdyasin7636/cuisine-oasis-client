import { useLoaderData } from "react-router-dom";

const EditProfile = () => {
  const data = useLoaderData();
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const password = form.password.value;

    const userData = {
      name,
      picture,
      password,
      email: data?.email,
    };

    fetch(`https://cuisine-oasis-server.vercel.app/user/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1 className="text-3xl mb-7">Edit Profile</h1>

      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="name"
            value={data?.name}
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Email</label>
          <input
            type="text"
            name="email"
            value={data?.email}
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor=""> Password</label>
          <input
            type="text"
            name="password"
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Photo URL</label>
          <input type="text" name="picture" className="py-2 px-1 bg-slate-50" />
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            value="Update Profile"
            className="btn btn-outline py-2 px-1"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
