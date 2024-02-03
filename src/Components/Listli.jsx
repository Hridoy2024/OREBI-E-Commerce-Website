import React from "react";

const Listli = ({ children, className, href }) => {
  return (
    <li>
      <a className={className} href={href}>
        {children}
      </a>
    </li>
  );
};

export default Listli;
