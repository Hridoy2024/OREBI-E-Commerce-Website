import React from "react";
import { Link } from "react-router-dom";

const Breadcums = ({ title }) => {
  return (
    <div>
      <h2 className="font-dm font-bold text-[50px] text-primary  ">{title}</h2>
      <p className="font-dm font-normal text-[12px] text-secondary mt-3">
        <Link to={`/`}>Home</Link> {">"} {title}
      </p>
    </div>
  );
};

export default Breadcums;
