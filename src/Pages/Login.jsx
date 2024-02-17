import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";

const Login = () => {
  return (
    <section className="mt-[124px]">
      <Container>
        <div>
          <h2 className="font-dm font-bold text-[50px] text-primary  ">
            Login
          </h2>
          <p className="font-dm font-normal text-[12px] text-secondary mt-3">
            Home {">"} Login
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
            Returning Customer
          </h2>

          <Flex className={`gap-10 flex-wrap `}>
            <div className="w-[508px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Email address{" "}
              </label>

              <input
                className=" w-full block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary "
                type="email"
                name=""
                id=""
                placeholder="company@domain.com"
              />
            </div>

            <div className="w-[508px]">
              <label
                className="font-dm font-bold text-[16px] leading-[23px] text-primary "
                htmlFor=""
              >
                Password{" "}
              </label>

              <input
                className=" w-full block pt-[10px] pb-4 border-b-[1px] border-[#F0F0F0] placeholder:font-dm  placeholder:font-normal placeholder:text-[14px]  placeholder:text-secondary"
                type="password"
                name=""
                id=""
                placeholder="......."
              />
            </div>
          </Flex>

          <button
            type="submit"
            className="font-dm font-bold text-[14px] text-primary py-4 px-[83px] border-[1px] border-primary mt-[30px] "
          >
            Log in
          </button>
        </form>
        {/* Form End */}

        {/* NEW CUSTOMER START */}
        <div>
          <h2 className="font-dm font-bold text-4xl lg:text-[42px] text-primary mb-[38px] mt-[58px]">
            New Customer
          </h2>
          <p className="font-dm font-normal text-[16px] text-secondary lg:w-[644px] mb-[51px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>

          <button
            type="submit"
            className="font-dm font-bold text-[14px] text-white bg-primary py-4 px-[83px] border-[1px] border-primary  "
          >
            Continue
          </button>
        </div>
        {/* NEW CUSTOMER END */}
      </Container>
    </section>
  );
};

export default Login;
