import React, { use } from "react";
import { Link, NavLink } from "react-router";
import users from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut();
  }
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto my-3">
      <div>{user && user.email}</div>
      <div className="text-accent flex list-none gap-5">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/career"}>Career</NavLink>
        </li>
      </div>
      <div className="flex gap-4">
        <img src={users} alt="" />
        {user ? (
          <button onClick={handleLogout}  className="btn btn-primary px-8">Logout</button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
