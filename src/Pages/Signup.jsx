import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";

const Signup = () => {
  return (
    <section className="mt-[124px]">
      <Container>
        <div>
          <h2 className="font-dm font-bold text-[50px] text-primary  ">
            Sign up
          </h2>
          <p className="font-dm font-normal text-[12px] text-secondary mt-3">
            Home {">"} Sign up
          </p>
        </div>

        <div className="mt-[127px] pb-[62px] border-b-[1px] border-[#F0F0F0] ">
          <p className="font-dm font-normal text-[16px] text-secondary lg:w-[644px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        {/* Form Start */}
        <form
          action=""
          className="mt-[57px] pb-[70px] border-b-[1px] border-[#F0F0F0] "
        >
          <h2 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[42px]">
            Your Personal Details
          </h2>

          <Flex className={`gap-10 mt-[42px] flex-col lg:flex-row flex-wrap `}>
            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                First Name{" "}
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary "
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
                Last Name{" "}
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Email address
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="email"
                name=""
                id=""
                placeholder="company@domain.com"
              />
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Telephone{" "}
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Your phone number"
              />
            </div>
          </Flex>

          <div className="border-[1px] border-[#F0F0F0] mt-[70px] "></div>

          <h2 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[42px] mt-[58px]">
            New Customer
          </h2>

          <Flex className={`gap-10 mt-[42px] flex-col lg:flex-row flex-wrap `}>
            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Address 1
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary "
                type="text"
                name=""
                id=""
                placeholder="4279 Zboncak Port Suite 6212"
              />
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Address 2
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="—"
              />
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                City
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="Your city"
              />
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Post Code
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="text"
                name=""
                id=""
                placeholder="05228"
              />
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Country
              </label>

              <select
                name=""
                id=""
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
              >
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">Japan</option>
                <option value="">China</option>
                <option value="">Uk</option>
                <option value="">USA</option>
                <option value="">Canada</option>
              </select>
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Region/State
              </label>

              <select
                name=""
                id=""
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
              >
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">Japan</option>
                <option value="">China</option>
                <option value="">Uk</option>
                <option value="">USA</option>
                <option value="">Canada</option>
              </select>
            </div>
          </Flex>

          <div className="border-[1px] border-[#F0F0F0] mt-[70px] "></div>

          <h2 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[42px] mt-[58px]">
            Your Password
          </h2>

          <Flex className={`gap-10 mt-[42px] flex-col lg:flex-row flex-wrap `}>
            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Password
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary "
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>

            <div className="mb-[23px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Repeat Password
              </label>

              <input
                className=" w-full md:w-[508px] block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="password"
                name=""
                id=""
                placeholder="Repeat Password"
              />
            </div>
          </Flex>

          <div className="border-[1px] border-[#F0F0F0] mt-[70px] "></div>

          <div className="mt-[65px]">
            <Flex className={`items-center gap-4 `}>
              <input type="radio" name="" id="" className="appearance-none w-[11px] h-[11px] border-[1px] border-secondary " />
              <label className="font-dm font-normal text-[14px] text-secondary " htmlFor="">
                I have read and agree to the Privacy Policy
              </label>
            </Flex>
          </div>
          <button
            type="submit"
            className="font-dm font-bold text-[14px] text-primary py-4 px-[83px] border-[1px] border-primary mt-[30px] "
          >
            Log in
          </button>
        </form>
        {/* Form End */}
      </Container>
    </section>
  );
};

export default Signup;
