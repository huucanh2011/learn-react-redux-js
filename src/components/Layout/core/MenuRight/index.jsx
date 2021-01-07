import React from "react";
import { FcCopyright } from "react-icons/fc";

export default function MenuRight() {
  return (
    <div className="flex items-center bg-white rounded-md p-4">
      Create By Huu Canh <FcCopyright className="mx-2" /> {new Date().getFullYear()}
    </div>
  );
}
