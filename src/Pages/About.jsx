import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Image from "../Components/Image";
import about1 from "../assets/About1.png";
import about2 from "../assets/About2.png";

const About = () => {
  return (
    <section className="mt-[124px]">
      <Container>
        <div>
          <h2 className="font-dm font-bold text-[50px] text-primary  ">
            About
          </h2>
          <p className="font-dm font-normal text-[12px] text-secondary mt-3">
            Home {">"} Products
          </p>
        </div>

        <Flex
          className={` gap-10 lg:gap-0 flex-col  lg:flex-row justify-between items-center mt-[136px] `}
        >
          <Image src={about1} />
          <Image src={about2} />
        </Flex>

        <p className="font-dm font-normal text-[40px] mt-[128px] leading-[52px] text-primary w-auto lg:w-[1494px]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>

        <Flex className={`mt-[118px] flex-col lg:flex-row gap-5 lg:gap-0`}>
          <div className="w-full lg:w-1/3">
            <h4 className="font-dm font-bold text-[22px] text-primary">
              Our Vision
            </h4>

            <p className="font-dm font-normal text-[16px] text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="w-full lg:w-1/3">
            <h4 className="font-dm font-bold text-[22px] text-primary">
              Our Story
            </h4>

            <p className="font-dm font-normal text-[16px] text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="w-full lg:w-1/3">
            <h4 className="font-dm font-bold text-[22px] text-primary">
              Our Brands
            </h4>

            <p className="font-dm font-normal text-[16px] text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
