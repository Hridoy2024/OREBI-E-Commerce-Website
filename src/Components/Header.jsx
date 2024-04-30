import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { productsReducer } from "../slices/ProductsSlice";
import { Link } from "react-router-dom";
import { productRemove } from "../slices/CartSlice";

const Header = () => {
  const [price, setPrice] = useState(0);
  const cartData = useSelector((state) => state.cart.cartArray);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const dropDownRef = useRef();
  const accountRef = useRef();
  const cartRef = useRef();
  const searchRef = useRef();
  const [dropDown, setDropDown] = useState(false);
  const [account, setAccount] = useState(false);
  const [cartDrop, setCartDrop] = useState(false);
  const [toggle, setIsToggle] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios.get("https://dummyjson.com/products").then((data) => {
        setProducts(data.data.products);
        dispatch(productsReducer(data.data.products));
      });
    };

    fetchData();
  }, []);

  const calculateTotal = () => {
    let p = 0;

    cartData.map(
      (cItem) =>
        (p =
          p +
          Math.round(
            (cItem.price - (cItem.price * cItem.discountPercentage) / 100) *
              cItem.qun
          ))
    );

    setPrice(p);
  };

  useEffect(() => {
    calculateTotal();
  });

  const handleSearch = (e) => {
    if (e.target.value == "") {
      setSearch([]);
    } else {
      const result = products.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearch(result);
    }
  };

  const showFilter = () => {
    navigate("/productfilter", { state: { key: search } });
  };

  // console.log(search);

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

      searchRef.current.contains(e.target)
        ? setSearchBar(true)
        : setSearchBar(false);
    });
  }, []);

  const gotoCheckout = () => {
    navigate("/checkout");
  };

  const removeProduct = (item) => {
    dispatch(productRemove(item.id));
  };

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
          <div ref={searchRef} className="relative w-[600px]">
            <input
              onChange={handleSearch}
              className="w-full py-4 pl-5 placeholder:font-dm font-normal text-[14px] text-[#c4c4c4] "
              type="text"
              placeholder="Search Products"
            />
            <FaSearch
              onClick={showFilter}
              className="absolute top-[50%] translate-y-[-50%] right-5 cursor-pointer "
            />

            {searchBar && (
              <div className="w-full max-h-[200px] bg-white absolute left-0 top-14 overflow-y-scroll z-50">
                {search.map((result) => (
                  <Flex
                    className={`bg-gray-100 p-3 justify-between items-center`}
                  >
                    <Flex className={`gap-5 items-center`}>
                      <Image
                        className={`h-18 w-32 object-cover`}
                        src={result.thumbnail}
                      />
                      <div>
                        <h1>{result.title}</h1>
                        <p>${result.price}</p>
                      </div>
                    </Flex>

                    <button className="px-4 py-2 bg-primary text-white font-dm font-normal text-sm ">
                      View
                    </button>
                  </Flex>
                ))}
              </div>
            )}
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
                  <div className="h-[240px] w-full overflow-y-scroll">
                    {cartData.length > 0 ? (
                      cartData.map((item, i) => (
                        <Flex
                          key={i}
                          className={`p-5 bg-[#f5f5f3] items-center gap-5 relative`}
                        >
                          <Image
                            className={`w-[80px] h-[80px] object-cover `}
                            src={item.thumbnail}
                          />

                          <div>
                            <h3 className="font-dm font-bold text-[14px] text-primary  ">
                              {item.title}
                            </h3>

                            <p className="font-dm font-bold text-[14px] text-primary  ">
                              ${item.price}
                            </p>
                          </div>

                          <FaTimes
                            onClick={() => removeProduct(item)}
                            className="absolute top-[50%] translate-y-[-50%] right-3"
                          />
                        </Flex>
                      ))
                    ) : (
                      <h1 className="text-center font-dm font-medium text-4xl">
                        Cart Empty{" "}
                      </h1>
                    )}
                  </div>

                  <div className="p-5">
                    <p className="font-dm font-normal text-[16px] leading-[23px] text-secondary  ">
                      Subtotal:{" "}
                      <span className="font-bold text-primary ">${price}</span>
                    </p>

                    <Flex className={`justify-between mt-3 `}>
                      <Link
                        to={`/cart`}
                        className=" py-4 px-10 border-[1px] border-[#2b2b2b] font-dm font-bold text-[14px] text-primary  "
                      >
                        View Cart
                      </Link>
                      <button
                        onClick={gotoCheckout}
                        className=" py-4 px-10 border-[1px] border-[#2b2b2b] font-dm font-bold text-[14px] text-white bg-primary  "
                      >
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
