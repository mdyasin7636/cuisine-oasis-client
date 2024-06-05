import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold text-base">
                <Link to="/">Home</Link>
              </li>
              {user && (
                <li className="font-semibold text-base">
                  <Link to="/all-recipes">All Recipes</Link>
                </li>
              )}
              <li className="font-semibold text-base">
                <Link to="/my-recipes">My Recipes</Link>
              </li>
              <li className="font-semibold text-base">
                <Link to="/faq">FAQ</Link>
              </li>
              {user && (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}
              {user && (
                <li>
                  <button onClick={handleLogout} className="btn btn-outline">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <a className="text-2xl font-bold ml-4">Cuisine Oasis</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold text-base">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold text-base">
              <Link to="/all-recipes">All Recipes</Link>
            </li>
            {user && (
              <li className="font-semibold text-base">
                <Link to="/my-recipes">My Recipes</Link>
              </li>
            )}
            <li className="font-semibold text-base">
              <Link to="/faq">FAQ</Link>
            </li>
            {user && (
              <li className="font-semibold text-base">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {user && (
            <button
              onClick={handleLogout}
              className="btn btn-outline hidden lg:block"
            >
              Logout
            </button>
          )}
          <div className="avatar">
            <div className="w-12 rounded-full ring-2 ring-gray-700 ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || "/avatar.png"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
