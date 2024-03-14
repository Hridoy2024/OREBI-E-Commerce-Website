import React, { useState } from "react";
import Flex from "./Flex";
import { GoTriangleUp } from "react-icons/go";
import Listul from "./Listul";
import Listli from "./Listli";
import { GoTriangleDown } from "react-icons/go";

const ShopByColor = () => {
  const [showColor, setShowColor] = useState(true);
  return (
    <div className="mt-[53px]">
      <Flex className={`items-center justify-between mb-[35px]`}>
        <h2 className="font-dm font-bold text-[20px] text-primary">
          Shop by Color
        </h2>

        {showColor ? (
          <GoTriangleUp className="text-secondary cursor-pointer" onClick={() => setShowColor(!showColor)} />
        ) : (
          <GoTriangleDown className="text-secondary cursor-pointer" onClick={() => setShowColor(!showColor)} />
        )}
      </Flex>

      {showColor && (
        <Listul>
          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <div className="w-[11px] h-[11px] bg-black rounded-full "></div>
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                Color 1
              </h3>
              {/* <h3>Color 1</h3> */}
            </Flex>
          </Listli>

          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <div className="w-[11px] h-[11px] bg-[#FF8686] rounded-full "></div>
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                Color 2
              </h3>
              {/* <h3>Color 1</h3> */}
            </Flex>
          </Listli>

          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <div className="w-[11px] h-[11px] bg-[#7ED321] rounded-full "></div>
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                Color 3
              </h3>
              {/* <h3>Color 1</h3> */}
            </Flex>
          </Listli>

          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <div className="w-[11px] h-[11px] bg-[#B6B6B6] rounded-full "></div>
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                Color 4
              </h3>
              {/* <h3>Color 1</h3> */}
            </Flex>
          </Listli>

          <Listli className={`mb-5`}>
            <Flex
              className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
            >
              <div className="w-[11px] h-[11px] bg-[#15CBA5] rounded-full "></div>
              <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                Color 5
              </h3>
              {/* <h3>Color 1</h3> */}
            </Flex>
          </Listli>
        </Listul>
      )}
    </div>
  );
};

export default ShopByColor;
