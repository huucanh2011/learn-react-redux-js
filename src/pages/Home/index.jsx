import React from "react";
import Skeleton from "react-loading-skeleton";
import { AddPost } from "../../components";

export default function HomePage() {
  return (
    <div>
      <AddPost />

      <div className="bg-white rounded-md p-2">
        {/* <Skeleton count={5} /> */}
      </div>
      
    </div>
  );
}
