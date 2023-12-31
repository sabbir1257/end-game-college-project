import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navigate = (
    <>
      <li className="hover:bg-[rgb(87,13,248)] rounded-lg">
        <Link className="hover:text-white" to="/">Home</Link>
      </li>
      <li className="hover:bg-[rgb(87,13,248)] rounded-lg">
        <Link className="hover:text-white" to="/about">About</Link>
      </li>
      <li className="hover:bg-[rgb(87,13,248)] rounded-lg">
        <Link className="hover:text-white" to="/colleges">Colleges</Link>
      </li>
      <li className="hover:bg-[rgb(87,13,248)] rounded-lg">
        <Link className="hover:text-white" to="/admission">Admission</Link>
      </li>
      <li className="hover:bg-[rgb(87,13,248)] rounded-lg">
        <Link className="hover:text-white" to="/my-college">My College</Link>
      </li>
      
      {user?.photoURL ? (
        <img
          className="w-[35px] h-[35px] rounded-full"
          src={user.photoURL}
          title={user.displayName}
          alt=""
        />
      ) : (
        <></>
      )}
      
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigate}
          </ul>
        </div>
        <Link className="text-xl normal-case btn btn-ghost">
          <img className="w-14" src={logo} alt="" />
          <p></p>
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navigate}</ul>
      </div>
      <div className="navbar-end">
        <div className="px-3 form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-outline btn-primary ">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline btn-primary">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
