import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

Button.propTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export function Button({ type, loading, onClick, children }) {
  let color = "bg-gray-400 hover:bg-gray-500";
  if (type === "primary") {
    color = "bg-green-500 hover:bg-green-600";
  }
  return (
    <button
      className={clsx(
        "bg-gray-300 text-white rounded-md shadow py-0 px-3 focus:outline-none",
        color
      )}
      onClick={onClick}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
