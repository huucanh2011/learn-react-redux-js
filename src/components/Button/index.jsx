import React from "react";

export function Button(props) {
  return <button className="bg-blue-500 py-1 px-2 rounded text-white" {...props}>{props.children}</button>;
}
