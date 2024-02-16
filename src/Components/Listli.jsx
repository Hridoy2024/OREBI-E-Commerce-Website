import React from "react";

const Listli = ({ children, className, href }) => {
  return <li className={className}>{children}</li>;
};

export default Listli;
