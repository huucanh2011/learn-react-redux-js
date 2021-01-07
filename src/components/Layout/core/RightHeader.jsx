import React, { useMemo } from "react";
import { Link } from "react-router-dom";

export default function RightHeader() {
  const rightMenuLinks = useMemo(
    () => [
      {
        name: "Đăng nhập",
        path: "/login",
      },
    ],
    []
  );
  return (
    <div className="flex justify-end">
      {rightMenuLinks.map((link, index) => (
        <Link
          className="bg-green-500 text-white py-2 px-3 hover:bg-green-600 text-sm rounded-md"
          key={index}
          to={link.path}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
