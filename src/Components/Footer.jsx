import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Listul from "./Listul";
import Listli from "./Listli";
import Image from "./Image";
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F3] pt-[55px] mt-[140px]">
      <Container>
        <Flex className={`flex-col gap-5 lg:flex-row lg:gap-0`}>
          <Flex className=" w-full lg:w-8/12 gap-12 lg:gap-[143px] ">
            <div>
              <h3 className="font-dm font-bold text-[16px] leading-[23px] mb-[27px]">
                MENU
              </h3>
              <Listul>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Home
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Shop
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  About
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Contact
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Journal
                </Listli>
              </Listul>
            </div>

            <div>
              <h3 className="font-dm font-bold text-[16px] leading-[23px] mb-[27px]">
                SHOP
              </h3>
              <Listul>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Category 1
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Category 2
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Category 3
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Category 4
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Category 5
                </Listli>
              </Listul>
            </div>

            <div>
              <h3 className="font-dm font-bold text-[16px] leading-[23px] mb-[27px]">
                HELP
              </h3>
              <Listul>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Privacy Policy
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Terms & Conditions
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Special E-shop
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Shipping
                </Listli>
                <Listli
                  className={`font-dm font-normal text-[14px] text-textColor mb-[6px]`}
                >
                  Secure Payments
                </Listli>
              </Listul>
            </div>

            <div>
              <h3 className="font-dm font-bold text-sm  leading-[27px] text-primary w-[186px] ">
                (052) 611-5711 company@domain.com
              </h3>

              <p className="font-dm font-normal text-[14px] text-textColor mt-[15px]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </Flex>
          <div className=" w-full lg:w-4/12">
            <Image src={`/images/logo.png`} />
          </div>
        </Flex>

        <Flex
          className={`mt-[65px] items-center justify-between pb-[52px] flex-col gap-5 lg:flex-row lg:gap-0`}
        >
          <Flex className={`gap-[25px]`}>
            <LiaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </Flex>

          <p className="font-dm font-normal text-[14px] text-textColor leading-[23px] text-center lg:text-left">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
