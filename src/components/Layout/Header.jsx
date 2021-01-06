import React from "react";
import { Link } from "react-router-dom";

const rightMenuLinks = [
  {
    name: "Đăng nhập",
    path: "/auth",
  },
  {
    name: "Đăng ký",
    path: "/auth",
  },
];

export default function Header() {
  return (
    <header className="flex items-center w-full fixed h-12 bg-white border-gray-100 border-b z-30 shadow-sm">
      <div className="w-full md:w-11/12 mx-auto flex items-center justify-between md:px-1">
        <div className="font-bold">
          <Link to="/">LOGO</Link>
        </div>

        <div className="py-4">
          {rightMenuLinks.map((link, index) => (
            <Link className="bg-green-500 text-white py-1 px-2 hover:bg-green-600 text-sm rounded-full mr-4" key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
