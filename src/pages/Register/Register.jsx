import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setPassMatch(false);
    }
    console.log(name, email, password, confirmPassword);

    if (password === confirmPassword) {
      createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            name: name,
            email: data?.user?.email,
          };
          fetch("https://cuisine-oasis-server.vercel.app/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
      if (user) {
        navigate(from);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                name="confirmPassword"
                required
              />
            </div>
            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500 font-semibold">
                  Password do not match!
                </p>
              </div>
            )}
            <div className="form-control mt-6">
              <input
                className="btn btn-outline"
                type="submit"
                value="Register"
              />
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div className="mt-6 font-semibold">
              <p>
                Already have an account?
                <Link to="/login" className=" pl-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
