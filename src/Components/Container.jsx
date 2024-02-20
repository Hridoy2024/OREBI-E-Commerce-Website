import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-container px-3 lg:px-2 ">{children}</div>
  );
};

export default Container;
