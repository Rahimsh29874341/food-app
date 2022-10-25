import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-screen mt-20 fixed top-0 left-0 w-60 border-r-2 border-slate-200 shadow z-0 px-4">
      <ul className="flex flex-col items-let justify-center py-4">
        <li className="flex flex-col border-b-2 border-gray-300">
          <span className="font-semibold text-gray-500 py-4 pt-1">Home</span>
          <Link to="/" className="flex items-center">
            <img className="p-2" src="/images/dashboard.svg" alt="" />
            <span className="text-gray-500 font-semibold text-sm">
              Dashboard
            </span>
          </Link>
        </li>
        <li className="my-3">
        <span className="font-semibold text-gray-500">Pages</span>
          <ul>
            <li className="my-4 flex items-left">
              <Link to="/" className="flex items-center">
              <img className="mx-2" src="/images/game.svg" alt="" />
                <span className="text-gray-500 font-semibold text-sm">
                  Bookmark
                </span>
              </Link>
            </li>
            <li className="my-4 flex items-left">
              <Link to="/" className="flex items-center">
                <img className="mx-2" src="/images/widgets.svg" alt="" />
                <span className="text-gray-500 font-semibold text-sm">
                  Authentication
                </span>
              </Link>
            </li>
            <li className="my-4 flex items-left">
              <Link to="/" className="flex items-center">
              <img className="mx-2" src="/images/special.svg" alt="" />
                <span className="text-gray-500 font-semibold text-sm">
                  Components
                </span>
              </Link>
            </li>
            <li className="my-4 flex items-left">
              <Link to="/" className="flex items-center">
              <img className="mx-2" src="/images/utility.svg" alt="" />
                <span className="text-gray-500 font-semibold text-sm">
                  Utility
                </span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="border-t-2 border-gray-300">
          <Link to="/" className="flex items-center">
            <i class="fa fa-gear text-xl p-2 text-gray-500"></i>
            <span className="text-gray-500 font-semibold text-sm">Setting</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
