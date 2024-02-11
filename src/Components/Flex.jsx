import React from "react";

const Flex = ({ className, children, onClick }) => {
  return <div onClick={onClick} className={`flex ${className}`}>{children}</div>;
};

export default Flex;
