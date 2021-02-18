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
          className="bg-blue-600 text-white py-1 px-3 hover:bg-blue-700 text-sm rounded-full"
          key={index}
          to={link.path}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
