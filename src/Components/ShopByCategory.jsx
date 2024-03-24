import React, { useState } from "react";
import Listli from "./Listli";
import Flex from "./Flex";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ShopByCategory = ({ categoryName, option, onClick }) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <Listli onClick={() => onClick(categoryName)} className={`mt-[35px]  `}>
      <Flex
        className={`items-center pb-5 justify-between border-b-[1px] border-solid`}
      >
        <h2
          onClick={() => onClick(categoryName)}
          className="capitalize cursor-pointer font-dm font-normal text-[16px] text-secondary  "
        >
          {categoryName}
        </h2>

        {option && (
          <div>
            {showOption ? (
              <FaMinus
                className="text-secondary cursor-pointer"
                onClick={() => setShowOption(!showOption)}
              />
            ) : (
              <FaPlus
                className="text-secondary cursor-pointer"
                onClick={() => setShowOption(!showOption)}
              />
            )}
          </div>
        )}
      </Flex>

      {showOption && (
        <div>
          <Link className="font-dm font-normal text-[16px] text-secondary pb-5 ml-5 mt-5 block border-b border-solid ">
            Cat 1
          </Link>
          <Link className="font-dm font-normal text-[16px] text-secondary pb-5 ml-5 mt-5 block border-b border-solid ">
            Cat 2
          </Link>
          <Link className="font-dm font-normal text-[16px] text-secondary pb-5 ml-5 mt-5 block border-b border-solid ">
            Cat 3
          </Link>
        </div>
      )}
    </Listli>
  );
};

export default ShopByCategory;
