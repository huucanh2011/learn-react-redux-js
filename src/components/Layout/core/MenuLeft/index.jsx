import React, { useMemo } from "react";
import { FcNews, FcShop, FcSportsMode, FcLike, FcGlobe } from "react-icons/fc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function MenuLeft() {
  const menuList = useMemo(
    () => [
      {
        name: "Bảng tin",
        icon: <FcNews />,
        path: "/",
      },
      {
        name: "Mua sắm",
        icon: <FcShop />,
        path: "/",
      },
      {
        name: "Tình yêu",
        icon: <FcLike />,
        path: "/",
      },
      {
        name: "Thể thao",
        icon: <FcSportsMode />,
        path: "/",
      },
      {
        name: "Du lịch - Phượt",
        icon: <FcGlobe />,
        path: "/",
      },
    ],
    []
  );
  return (
    <div className="relative">
      {menuList.map((menuItem, index) => (
        <Link key={index} to={menuItem.path}>
          <MenuItem name={menuItem.name} icon={menuItem.icon} />
        </Link>
      ))}
      <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-md">
        <div className="flex items-center justify-center py-1 px-3">
          <span className="font-semibold mr-2">Xem thêm</span>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}
