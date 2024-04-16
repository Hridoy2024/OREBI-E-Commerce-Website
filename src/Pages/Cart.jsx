import React from "react";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Flex from "../Components/Flex";
import { FaTimes } from "react-icons/fa";
import Image from "../Components/Image";

const Cart = ({ title }) => {
  return (
    <section className="mt-[124px]">
      <Container>
        <Breadcums title={title} />

        <div className="mt-[136px]">
          {/* cart header */}
          <Flex className={`bg-[#f5f5f3] py-[34px] px-5`}>
            <div className="w-1/4">
              <h2 className="font-dm font-bold text-[16px] text-primary">
                Product
              </h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-dm font-bold text-[16px] text-primary">
                Price
              </h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-dm font-bold text-[16px] text-primary">
                Quantity
              </h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-dm font-bold text-[16px] text-primary">
                Total
              </h2>
            </div>
          </Flex>
          {/* cart header end */}

          {/* cart main start */}

          <Flex className={`border-[1px] border-[#F0F0F0]`}>
            <div className="w-1/4">
              <Flex className={`items-center gap-10 py-[30px] px-5 `}>
                <FaTimes />

                <Flex className={`items-center gap-5`}>
                  <Image className={`w-[100px] h-[100px]`} src={`/item4.png`} />
                  <p className="font-dm font-bold text-[16px] text-primary">
                    iPhone 9
                  </p>
                </Flex>
              </Flex>
            </div>

            <div className="w-1/4"></div>
            <div className="w-1/4"></div>
            <div className="w-1/4"></div>
          </Flex>
          {/* cart main end */}
        </div>
      </Container>
    </section>
  );
};

export default Cart;
