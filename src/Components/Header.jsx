import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Listul from "./Listul";
import Listli from "./Listli";
import { FaBarsProgress } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className={`justify-between items-center `}>
          {/* catagory button */}
          <div>

          <Flex className={`items-center gap-[10px] `}>
            <FaBarsProgress />
            <span className="font-dm font-normal text-[14px] text-[#262626]">
              Shop by Category
            </span>
          </Flex>

          <Listul className={`bg-[#262626] w-[263px]`}>
            <Listli className={`py-4 pl-5 block`}>Accesories</Listli>
            <Listli className={`py-4 pl-5 block`}>Furniture</Listli>
            <Listli className={`py-4 pl-5 block`}>Electronics</Listli>
            <Listli className={`py-4 pl-5 block`}>Clothes</Listli>
            <Listli className={`py-4 pl-5 block`}>Bags</Listli>
            <Listli className={`py-4 pl-5 block`}>Home appliances</Listli>
          </Listul>
          </div>

          {/* catagory button end */}

          {/* Search  */}
          <div className="relative">
            <input
              className="w-[600px] py-4 pl-5 placeholder:font-dm font-normal text-[14px] text-[#c4c4c4] "
              type="text"
              placeholder="Search Products"
            />

            <FaSearch className="absolute top-[50%] translate-y-[-50%] right-5 " />
          </div>
          {/* Search End */}

          {/* Login */}
          <Flex className={`gap-10`}>
            <Flex className={`gap-[10px]`}>
              <FaUser />
              <IoMdArrowDropdown />
            </Flex>

            <FaShoppingCart className="" />
          </Flex>
          {/* Login End*/}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
