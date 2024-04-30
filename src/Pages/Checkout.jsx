import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Flex from "../Components/Flex";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Flex from './../Components/Flex';

const Checkout = ({ title }) => {
  const cartData = useSelector((state) => state.cart.cartArray);
  const [price, setPrice] = useState(0);

  const calculateTotal = () => {
    let p = 0;

    cartData.map(
      (cItem) =>
        (p =
          p +
          Math.round(
            (cItem.price - (cItem.price * cItem.discountPercentage) / 100) *
              cItem.qun
          ))
    );

    setPrice(p);
  };

  useEffect(() => {
    calculateTotal();
  });
  return (
    <section className="mt-[123px]">
      <Container>
        <Breadcums title={title} />

        <div className={` items-center mt-[127px] `}>
          <h3 className="font-dm font-normal text-[16px] text-[#767676]">
            Have a coupon?{" "}
            <Link className="font-dm font-normal text-[16px] text-[#262626]">
              Click here to enter your code{" "}
            </Link>{" "}
          </h3>
        </div>

        {/* form start */}

        <form action="" className="mt-[119px]">
          <h2 className="font-dm font-bold text-[39px]  text-primary mb-[42px]">
            Billing Details
          </h2>

          <Flex className={`gap-10 mt-[42px] flex-col lg:flex-row flex-wrap `}>
            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                First Name*
              </label>

              <input
                className=" w-full lg:w-[508px] block pt-[10px] pb-4 border-b border-[#F0F0F0] placeholder:font-dm placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary "
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Last Name*
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
            </div>

            <div className="mb-[23px] w-[1055px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Companye Name (optional)
              </label>

              <input
                className=" w-full  block pt-[10px] pb-4 border-b border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Company Name"
              />
            </div>

            <div className="mb-[23px] w-[1055px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Country *
              </label>

              <select
                name=""
                id=""
                className=" w-full  block pt-[10px] pb-4 border-b border-[#F0F0F0] "
              >
                <option value="">Please select</option>
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">Japan</option>
              </select>
            </div>

            <div className="mb-[23px] w-[1055px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Street Address *
              </label>

              <input
                className=" w-full  block pt-[10px] pb-4 border-b border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="House number and street name"
              />

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Apartment, suite, unit etc. (optional)"
              />
            </div>

            <div className="mb-[23px] w-[1055px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Town/City *
              </label>

              <input
                className=" w-full  block pt-[10px] pb-4 border-b border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Town/City"
              />
            </div>

            <div className="mb-[23px] w-[1055px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                County (optional)
              </label>

              <input
                className=" w-full  block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="County"
              />
            </div>

            <div className="mb-[23px] w-[1055px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Post Code *
              </label>

              <input
                className=" w-full block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Post Code"
              />
            </div>

            <div className="mb-[23px] w-[1055px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Phone *
              </label>

              <input
                className=" w-full  block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Phone"
              />
            </div>

            <div className="mb-[23px] w-[1055px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Email address
              </label>

              <input
                className=" w-full  block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="email"
                name=""
                id=""
                placeholder="company@domain.com"
              />
            </div>
          </Flex>
        </form>
        {/* form end */}

        {/* additional part */}

        <div className="mt-[129px] ">
          <h1 className="font-dm font-bold text-[39px] text-primary mb-[42px]">
            Additional Information
          </h1>

          <div className="mb-[23px]">
            <label
              className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
              htmlFor=""
            >
              Other Notes (optional)
            </label>

            <input
              className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[86px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
              type="text"
              name=""
              id=""
              placeholder="Notes about your order, e.g. special notes for delivery."
            />
          </div>
        </div>
        {/* additional part end */}

        {/* order info start */}
        <div className="mt-[129px]">
          <h4 className=" font-dm font-bold text-[40px] text-primary mb-[42px]">
            Your Order
          </h4>

          <div className="w-full lg:w-[644px]">
            <Flex>
              <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                Product
              </p>
              <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                Total
              </p>
            </Flex>

            {cartData.map((cItem, i) => (
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                  {cItem.title} x {cItem.qun}
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                  {Math.round(
                    (cItem.price -
                      (cItem.price * cItem.discountPercentage) / 100) *
                      cItem.qun
                  )}
                  $
                </p>
              </Flex>
            ))}

            <Flex>
              <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                Subtotal
              </p>
              <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                {price} $
              </p>
            </Flex>
            <Flex>
              <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-bold text-[16px] text-primary">
                Total
              </p>
              <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-dm font-normal text-[16px] text-secondary">
                {price} $
              </p>
            </Flex>
          </div>

          <div className="border-[1px] border-[#f0f0f0] py-6 px-[34px] mt-[60px]">
            <div>
              <Flex className={`items-center gap-3`}>
                <input
                  type="radio"
                  name="sub"
                  id=""
                  className="border-[1px] border-secondary appearance-none h-[11px] w-[11px] rounded-full checked:bg-roundDot checked:bg-[length:7px_7px] checked:bg-no-repeat checked:bg-center focus:outline-transparent"
                />
                <label className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                  Bank
                </label>
              </Flex>

              <div className="mt-[14px] relative">
                <div className="w-[16px] h-[16px] bg-[#F7F8F9] rotate-[45deg] absolute top-[-7px] left-8"></div>
                <p className=" font-dm font-normal text-[14px] text-secondary bg-[#F7F8F9] p-6">
                  Pay via Bank; you can pay with your credit card if you don’t
                  have a Bank account.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Flex className={`items-center gap-3`}>
                <input
                  type="radio"
                  name="sub"
                  id=""
                  className="border-[1px] border-secondary appearance-none h-[11px] w-[11px] rounded-full checked:bg-roundDot checked:bg-[length:7px_7px] checked:bg-no-repeat checked:bg-center focus:outline-transparent"
                />
                <label className=" font-dm font-bold text-[16px] leading-[23px] text-secondary">
                  Bank 2
                </label>
              </Flex>

              <div className="mt-[14px]">
                <p className=" font-dm font-normal text-[16px] text-secondary">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <Link className=" text-primary">privacy policy</Link>.
                </p>
              </div>
            </div>

            <button className=" font-dm font-bold text-[14px] bg-primary text-white py-4 px-[42px] mt-6">
              Proceed to Bank
            </button>
          </div>
        </div>
        {/* order info end */}
      </Container>
    </section>
  );
};

export default Checkout;
