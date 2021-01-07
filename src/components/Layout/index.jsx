import React from "react";
import MenuLeft from "./core/MenuLeft";
import MenuRight from "./core/MenuRight";
import Header from "./Header";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-800">
      <Header />
      <main className="flex justify-between md:w-11/12 mx-auto px-2 md:px-0 pt-14 md:16">
        <div className="hidden md:block w-1/4 flex-shrink-0 pr-2">
          <MenuLeft />
        </div>
        <div className="min-w-0 w-full md:w-2/4 pb-24">{children}</div>
        <div className="hidden md:block w-1/4 flex-shrink-0 pl-2">
          <MenuRight />
        </div>
      </main>
    </div>
  );
}
