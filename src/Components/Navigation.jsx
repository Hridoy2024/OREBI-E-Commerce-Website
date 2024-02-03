import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import Listul from "./Listul";
import Listli from "./Listli";
import { FaBarsStaggered } from "react-icons/fa6";

const Navigation = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <nav className=" bg-white py-[32px] relative">
      <Container>
        <Flex className="items-center justify-between ">
          <Image src="/images/logo.png" />
          <FaBarsStaggered
            onClick={() => setDropDown(!dropDown)}
            size={22}
            className="block lg:hidden"
          />

          <Listul
            className={` ${
              dropDown ? "absolute" : "hidden"
            } top-16 px-3 left-0 bg-gray-500  w-full lg:flex gap-10 lg:static lg:px-0 lg:bg-white lg:w-auto `}
          >
            <Listli
              href="#"
              className="font-dm font-normal text-[14px] lg:text-primary  lg:p-0 py-3 block text-white hover:text-bold hover:font-bold"
            >
              Home
            </Listli>
            <Listli
              href="#"
              className="font-dm font-normal text-[14px] lg:text-primary  lg:p-0py-3 block text-white hover:text-bold hover:font-bold"
            >
              Shop
            </Listli>
            <Listli
              href="#"
              className="font-dm font-normal text-[14px] lg:text-primary lg:p-0 py-3 block text-white hover:text-bold hover:font-bold"
            >
              About
            </Listli>
            <Listli
              href="#"
              className="font-dm font-normal text-[14px] lg:text-primary lg:p-0 py-3 block text-white hover:text-bold hover:font-bold"
            >
              Contacts
            </Listli>
            <Listli
              href="#"
              className="font-dm font-normal text-[14px] lg:text-primary lg:p-0 py-3 block text-white hover:text-bold hover:font-bold"
            >
              Journal
            </Listli>
          </Listul>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
