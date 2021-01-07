import React from "react";
import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  props: PropTypes.object,
};

export function Input({ type = "text", placeholder, ...props }) {
  return (
    <input
      type={type}
      className="relative w-full text-gray-600 rounded-md bg-gray-200 py-1 px-3 focus:outline-none"
      placeholder={placeholder}
      {...props}
    />
  );
}
