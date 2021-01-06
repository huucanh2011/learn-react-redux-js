import React from "react";
import Header from "./Header";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <main className="pt-12">{children}</main>
    </div>
  );
}
