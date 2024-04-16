import React from "react";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Flex from "../Components/Flex";
import { FaTimes } from "react-icons/fa";
import Image from "../Components/Image";
// import Flex from "./../Components/Flex";

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

            <div className="w-1/4">
              <Flex className={`items-center h-full`}>
                <p className="font-dm font-bold text-[20px] text-primary">
                  $44.00
                </p>
              </Flex>
            </div>
            <div className="w-1/4">
              <Flex className={`items-center h-full`}>
                <Flex className={`w-[139px] border-[1px] border-gray-300 `}>
                  <button className="w-1/3 py-2">-</button>
                  <button className="w-1/3 py-2">1</button>
                  <button className="w-1/3 py-2">+</button>
                </Flex>
              </Flex>
            </div>
            <div className="w-1/4">
              <Flex className={`items-center h-full`}>
                <p className="font-dm font-bold text-[20px] text-primary">
                  $44.00
                </p>
              </Flex>
            </div>
          </Flex>
          {/* cart main end */}

          {/* lower section */}
          <Flex className={`border-[1px] border-[#F0F0F0] p-5`}>
            <div className="w-1/2">
              <Flex className={`items-center gap-6`}>
                <div className={`items-center gap-[14px]`}>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-[255px] p-2.5"
                  >
                    <option value="US">SIZE</option>
                    <option value="US">L</option>
                    <option value="US">XL</option>
                    <option value="US">XXL</option>
                  </select>
                </div>

                <p className="font-dm font-bold text-[16px] text-primary ">
                  Apply Coupon
                </p>
              </Flex>
            </div>
            <div className="w-1/2">
              <Flex className={`items-center justify-end h-full`}>
                <button className="font-dm font-bold text-[16px] text-primary ">
                  Update Cart
                </button>
              </Flex>
            </div>
          </Flex>

          {/* lower section end */}

          {/* total section */}
          <div className="mt-[54px] w-[644px] ml-auto ">
            <h2 className="font-dm font-bold text-right text-[20px] text-primary ">
              Cart totals
            </h2>

            <Flex>
              <div className="w-1/2 border-[1px] border-[#F0F0F0] p-5">
                Subtotal
              </div>
              <div className="w-1/2 border-[1px] border-[#F0F0F0] p-5">
                2294 $
              </div>
            </Flex>

            <Flex>
              <div className="w-1/2 border-[1px] border-[#F0F0F0] p-5">
                Total
              </div>
              <div className="w-1/2 border-[1px] border-[#F0F0F0] p-5">
                2294 $
              </div>
            </Flex>

            <button className=" ms-auto block mt-[30px] font-dm font-bold text-[14px] text-white bg-primary py-[16px] px-[24px] ">Proceed to Checkout</button>
          </div>
          {/* total section end */}
        </div>
      </Container>
    </section>
  );
};

export default Cart;
