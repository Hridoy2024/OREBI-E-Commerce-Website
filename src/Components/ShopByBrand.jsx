import React, { useState } from "react";
import Flex from "./Flex";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import Listul from "./Listul";
import Listli from "./Listli";

const ShopByBrand = () => {
  const [showBrand, setShowBrand] = useState(true);
  return (
    <div className="mt-[53px]">
      <Flex className={`items-center justify-between mb-[35px]`}>
        <h2 className="font-dm font-bold text-[20px] text-primary">
          Shop by Brand
        </h2>

        {showBrand ? (
          <GoTriangleUp
            className="text-secondary cursor-pointer"
            onClick={() => setShowBrand(!showBrand)}
          />
        ) : (
          <GoTriangleDown
            className="text-secondary cursor-pointer"
            onClick={() => setShowBrand(!showBrand)}
          />
        )}
      </Flex>

      {showBrand && (
        <Listul>
          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
              Brand 1
              </h3>
            </Flex>
          </Listli>

          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
              Brand 2
              </h3>
            </Flex>
          </Listli>

          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
              Brand 3
              </h3>
             
            </Flex>
          </Listli>

          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
              Brand 4
              </h3>
            </Flex>
          </Listli>

          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
              Brand 5
              </h3>
            </Flex>
          </Listli>
        </Listul>
      )}
    </div>
  );
};

export default ShopByBrand;
