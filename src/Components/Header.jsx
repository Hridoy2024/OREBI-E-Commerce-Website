import React, { useEffect, useRef, useState } from "react";
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
  const dropDownRef = useRef();
  const accountRef = useRef();
  const [dropDown, setDropDown] = useState(false);
  const [account, setAccount] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      // console.log(dropDownRef);
      // if (dropDownRef.current.contains(e.target)) {
      //   setDropDown(true);
      // } else {
      //   setDropDown(false);
      // }

      dropDownRef.current.contains(e.target)
        ? setDropDown(true)
        : setDropDown(false);

      accountRef.current.contains(e.target)
        ? setAccount(true)
        : setAccount(false);
    });
  }, []);
  return (
    <header className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className={`justify-between items-center `}>
          {/* catagory button */}
          <div ref={dropDownRef} className="relative">
            <Flex className={`items-center gap-[10px] `}>
              <FaBarsProgress />
              <span className="font-dm font-normal text-[14px] text-[#262626]">
                Shop by Category
              </span>
            </Flex>

            {dropDown && (
              <Listul className={`bg-[#262626] w-[263px] mt-[15px absolute`}>
                <Listli
                  className={`py-4 pl-5 block font-dm font-normal text-[14px] text-white opacity-50 hover:font-bold hover:opacity-100 hover:pl-[30px] duration-300 ease-in-out `}
                >
                  Accesories
                </Listli>
                <Listli
                  className={`py-4 pl-5 block font-dm font-normal text-[14px] text-white opacity-50 hover:font-bold hover:opacity-100 hover:pl-[30px] duration-300 ease-in-out `}
                >
                  Furniture
                </Listli>
                <Listli
                  className={`py-4 pl-5 block font-dm font-normal text-[14px] text-white opacity-50 hover:font-bold hover:opacity-100 hover:pl-[30px] duration-300 ease-in-out `}
                >
                  Electronics
                </Listli>
                <Listli
                  className={`py-4 pl-5 block font-dm font-normal text-[14px] text-white opacity-50 hover:font-bold hover:opacity-100 hover:pl-[30px] duration-300 ease-in-out `}
                >
                  Clothes
                </Listli>
                <Listli
                  className={`py-4 pl-5 block font-dm font-normal text-[14px] text-white opacity-50 hover:font-bold hover:opacity-100 hover:pl-[30px] duration-300 ease-in-out `}
                >
                  Bags
                </Listli>
                <Listli
                  className={`py-4 pl-5 block font-dm font-normal text-[14px] text-white opacity-50 hover:font-bold hover:opacity-100 hover:pl-[30px] duration-300 ease-in-out `}
                >
                  Home appliances
                </Listli>
              </Listul>
            )}
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
            <div ref={accountRef} className="relative">
              <Flex className={`gap-[10px] cursor-pointer`}>
                <FaUser className="text-bold" />
                <IoMdArrowDropdown className="text-bold" />
              </Flex>

              {account &&  <Listul className={`mt-[15px] absolute right-0 w-[200px]`}>
                <Listli
                  className={` py-4 px-[58px] text-center  block font-dm font-bold text-[14px] text-white bg-primary `}
                >
                  My Account
                </Listli>

                <Listli
                  className={` py-4 px-[58px]  text-center block font-dm font-normal text-[14px] text-primary bg-white `}
                >
                  Log Out
                </Listli>
              </Listul>}
            </div>

            <FaShoppingCart className="" />
          </Flex>
          {/* Login End*/}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
