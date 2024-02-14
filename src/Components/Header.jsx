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
import Image from "./Image";
import img from "../assets/headerimg.png";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const dropDownRef = useRef();
  const accountRef = useRef();
  const cartRef = useRef();
  const [dropDown, setDropDown] = useState(false);
  const [account, setAccount] = useState(false);
  const [cartDrop, setCartDrop] = useState(false);
  const [toggle, setIsToggle] = useState(false);

  const handletoggle = () => {
    setIsToggle(!toggle);
    setCartDrop(!cartDrop);
  };

  const off = () => {
    setCartDrop(false);
    setIsToggle(false);
  };

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

      cartRef.current.contains(e.target) ? setCartDrop(true) : off();
    });
  }, []);
  return (
    <header className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className={`justify-between items-center gap-3 lg:gap-0`}>
          {/* catagory button */}
          <div ref={dropDownRef} className="relative">
            <Flex className={`items-center gap-[10px] `}>
              <FaBarsProgress />
              <span className="font-dm font-normal text-[14px] text-[#262626] hidden lg:block">
                Shop by Category
              </span>
            </Flex>

            {dropDown && (
              <Listul
                className={`bg-[#262626] w-[263px] mt-[15px absolute z-50`}
              >
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
          <div className="relative w-[600px]">
            <input
              className="w-full py-4 pl-5 placeholder:font-dm font-normal text-[14px] text-[#c4c4c4] "
              type="text"
              placeholder="Search Products"
            />

            <FaSearch className="absolute top-[50%] translate-y-[-50%] right-5 " />
          </div>
          {/* Search End */}

          {/* Login */}
          <Flex className={`gap-10`}>
            <div ref={accountRef} className="relative">
              <Flex onClick={toggle} className={`gap-[10px] cursor-pointer`}>
                <FaUser className="text-bold" />
                <IoMdArrowDropdown className="text-bold" />
              </Flex>

              {account && (
                <Listul className={`mt-[15px] absolute right-0 w-[200px] z-50`}>
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
                </Listul>
              )}
            </div>

            <div ref={cartRef} className="relative">
              <FaShoppingCart
                onClick={handletoggle}
                className="text-primary cursor-pointer"
              />

              {cartDrop && toggle ? (
                <div className="w-[360px] bg-white absolute right-0 shadow-sm z-50">
                  <Flex
                    className={`p-5 bg-[#f5f5f3] items-center gap-5 relative`}
                  >
                    <Image src={img} />

                    <div>
                      <h3 className="font-dm font-bold text-[14px] text-primary  ">
                        Black Smart Watch
                      </h3>

                      <p className="font-dm font-bold text-[14px] text-primary  ">
                        $44.00
                      </p>
                    </div>

                    <FaTimes className="absolute top-[50%] translate-y-[-50%] right-3" />
                  </Flex>

                  <div className="p-5">
                    <p className="font-dm font-normal text-[16px] leading-[23px] text-secondary  ">
                      Subtotal:{" "}
                      <span className="font-bold text-primary ">$44.00</span>
                    </p>

                    <Flex className={`justify-between mt-3 `}>
                      <button className=" py-4 px-10 border-[1px] border-[#2b2b2b] font-dm font-bold text-[14px] text-primary  ">
                        View Cart
                      </button>
                      <button className=" py-4 px-10 border-[1px] border-[#2b2b2b] font-dm font-bold text-[14px] text-white bg-primary  ">
                        Checkout
                      </button>
                    </Flex>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </Flex>
          {/* Login End*/}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
