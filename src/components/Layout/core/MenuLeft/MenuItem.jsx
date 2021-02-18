import React from "react";
import clsx from 'clsx'

export default function MenuItem({ name, icon }) {
  let classActive = name === "Bảng tin" ? "bg-blue-300 border-blue-400 border" : ""

  return (
    <div className={clsx("cursor-pointer hover:bg-blue-300 rounded-md mb-2", classActive)}>
      <div className="flex items-center py-1 px-3">
        {icon}
        <span className="ml-2">{name}</span>
      </div>
    </div>
  );
}
