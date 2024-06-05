import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        <ul>
          <li className="font-semibold text-lg  w-full btn btn-outline">
            <Link to={""}>Dashboard</Link>
          </li>
          <li className="font-semibold text-lg mt-4 btn btn-outline  w-full">
            <Link to={"add-recipe"}>Add Recipe</Link>
          </li>
          <li className="font-semibold text-lg  mt-4  btn btn-outline w-full">
            <Link to={"my-recipe"}>My Recipe</Link>
          </li>
          <li className="font-semibold text-lg  mt-4 btn btn-outline w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
