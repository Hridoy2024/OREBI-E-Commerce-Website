import React from "react";
import Flex from "./Flex";
import Listul from "./Listul";
import Listli from "./Listli";

const ShopByPrice = () => {
    return (
        <div className="mt-[53px]">
          <Flex className={`items-center justify-between mb-[35px]`}>
            <h2 className="font-dm font-bold text-[20px] text-primary">
              Shop by Price
            </h2>
    
          </Flex>
    
       
            <Listul>
              <Listli className={`mb-5`}>
                <Flex
                  className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
                >
                  <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                  $0.00 - $9.99
                  </h3>
                </Flex>
              </Listli>
    
              <Listli className={`mb-5`}>
                <Flex
                  className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
                >
                  <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                  $10.00 - $19.99
                  </h3>
                </Flex>
              </Listli>
    
              <Listli className={`mb-5`}>
                <Flex
                  className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
                >
                  <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                  $20.00 - $29.99
                  </h3>
                 
                </Flex>
              </Listli>
    
              <Listli className={`mb-5`}>
                <Flex
                  className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
                >
                  <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                  $30.00 - $39.99
                  </h3>
                </Flex>
              </Listli>
    
              <Listli className={`mb-5`}>
                <Flex
                  className={`items-center gap-[10px] pb-[19px] border-b-[1px]`}
                >
                  <h3 className="font-dm font-normal text-[16px] text-secondary  ">
                  $40.00 - $69.99
                  </h3>
                </Flex>
              </Listli>
            </Listul>
       
        </div>
      );
};

export default ShopByPrice;
