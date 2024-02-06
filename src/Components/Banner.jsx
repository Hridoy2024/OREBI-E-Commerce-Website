import React from "react";
import Image from "../Components/Image";
import BannerImage from "../assets/banner.png";
import Container from "./Container";
import Flex from "./Flex";
import { FaTruck } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const Banner = () => {
  return (
    <section>
      <Image src={BannerImage} />
      <div className="bg-white py-[30px]">
        <Container>
          <Flex className={`justify-between`}>
            <Flex className={`items-center gap-[17px]`}>
              <span className="font-dm font-bold text-[30px]">2</span>
              <p className="font-dm font-normal text-[16px] text-[#6D6D6D]">
                Two years warranty
              </p>
            </Flex>

            <Flex className={`items-center gap-[15px]`}>
              <FaTruck size={25} />
              <p className="font-dm font-normal text-[16px] text-[#6D6D6D]">
                Free shipping
              </p>
            </Flex>

            <Flex className={`items-center gap-[15px]`}>
              <VscDebugRestart size={25} />
              <p className="font-dm font-normal text-[16px] text-[#6D6D6D]">
                Return policy in 30 days
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
