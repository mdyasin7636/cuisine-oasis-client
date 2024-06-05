import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);
  return (
    <div>
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl font-semibold">User Profile Information</h1>
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-outline btn-md"
        >
          Edit Profile
        </Link>
      </div>
      <div className="text-2xl my-10">
        <img src={user?.photoURL || "/avatar.png"} />
        <h1>Name: {userInfo?.name}</h1>
        <h1>Email: {userInfo?.email}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
