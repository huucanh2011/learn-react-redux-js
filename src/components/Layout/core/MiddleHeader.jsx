import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

export default function MiddleHeader() {
  const links = useMemo(
    () => [
      {
        name: "Trang chủ",
        path: "/",
      },
      {
        name: "Tin tức mới",
        path: "/news",
      },
      {
        name: "Tag",
        path: "/tags",
      },
      {
        name: "Về chúng tôi",
        path: "/about",
      },
    ],
    []
  );
  return (
    <div className="flex justify-center">
      {links.map((link, index) => (
        <NavLink key={index} to={link.path} className="mx-1 md:mx-2 lg:mx-3 py-2 font-semibold whitespace-nowrap text-gray-400 hover:text-gray-500">
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
