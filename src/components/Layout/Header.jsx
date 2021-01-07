import React from "react";
import { Link } from "react-router-dom";
import MiddleHeader from "./core/MiddleHeader";
import RightHeader from "./core/RightHeader";
import SearchBox from "./core/SearchBox";
import { FcMenu } from "react-icons/fc";

export default function Header() {
  return (
    <header className="flex items-center w-full fixed h-12 bg-white border-gray-100 border-b z-30 shadow-sm">
      <div className="w-full md:w-11/12 mx-auto flex items-center md:px-1 sm:px-2">
        <div className="flex items-center w-full lg:w-1/3 px-2 md:px-0">
          <Link className="text-2xl font-bold mr-0 md:mr-2" to="/">
            LOGO
          </Link>
          <SearchBox />
          <button className="block lg:hidden border-2 border-gray-200 rounded-md p-1 hover:border-gray-400 focus:outline-none">
            <FcMenu className="text-xl" />
          </button>
        </div>
        <div className="hidden lg:block w-0 lg:w-1/3">
          <MiddleHeader />
        </div>
        <div className="hidden lg:block w-0 lg:w-1/3">
          <RightHeader />
        </div>
      </div>
    </header>
  );
}
