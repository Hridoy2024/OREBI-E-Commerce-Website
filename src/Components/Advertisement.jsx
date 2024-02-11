import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Aad1 from "../assets/Ad1.png";
import Aad2 from "../assets/Ad2.png";
import Aad3 from "../assets/Ad3.png";
import Image from "./Image";

const Advertisement = () => {
  return (
    <section className="mt-[140px]">
      <Container>
        <Flex className={`flex-col gap-5 lg:flex-row lg:gap-0`} >
          <div className=" w-full lg:w-1/2 ">
            <Image src={Aad1} />
          </div>
          <div className=" w-full lg:w-1/2 ">
            <Flex className={`flex-col gap-5`}>
              <Image src={Aad2} />
              <Image src={Aad3} />
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Advertisement;
