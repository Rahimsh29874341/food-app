import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 flex items-center justify-between px-10  h-20 border-b-2 border-slate-200 shadow z-10 fixed top-0 w-full">
      <div className="flex items-center justify-between">
        <span className="absolute top-6 left-4"><i class="fa fa-bars text-xl"></i></span>
        <div className="ml-10">
            <Link to='/'><img className="w-28 h-20" src="/images/logo.svg" alt="" /></Link>
        </div>
      </div>
      <Search placholder="Search here..."></Search>

      <ul className="">
        <button className="mx-2">
          <li>
            <Link
              to="/login"
              className="border-2 border-btn bg-btn font-bold text-gray-200 hover:text-white hover:bg-none px-5 py-2 rounded"
            >
              Login
            </Link>
          </li>
        </button>
        <button className="mx-2">
          <li>
            <Link
              to="/register"
              className="border-2 border-slate-600 font-bold text-slate-600 hover:text-slate-500 px-5 py-2 rounded"
            >
              Sign up
            </Link>
          </li>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
