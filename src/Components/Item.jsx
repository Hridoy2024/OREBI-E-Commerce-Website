import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaCartShopping } from "react-icons/fa6";

const Item = ({ item, className }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    // console.log(id);
    navigate(`/product/${id}`);
  };
  return (
    <div
      onClick={() => showProduct(item.id)}
      className={`w-[370px] mx-auto group cursor-pointer ${className}`}
    >
      <div className=" relative overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.itemName}
          className={`w-[370px] h-[370px] object-cover`}
        />
        {/* <img src={item.img} alt="" /> */}
        <Flex className=" absolute left-0 bottom-[-150px] group-hover:bottom-0 duration-150 ease-in-out w-full h-[156px] p-[30px] bg-white flex-col items-end justify-center gap-5">
          <a
            href=""
            className=" font-dm font-normal text-[16px] text-secondary flex items-center gap-[15px] hover:font-bold hover:text-primary"
          >
            Add to Wish List <FaHeart className="text-primary" />
          </a>
          <a
            href=""
            className=" font-dm font-normal text-[16px] text-secondary flex items-center gap-[15px] hover:font-bold hover:text-primary"
          >
            Compare <TfiReload className="text-primary font-bold font-dm" />
          </a>
          <a
            href=""
            className=" font-dm font-normal text-[16px] text-secondary flex items-center gap-[15px] hover:font-bold hover:text-primary"
          >
            Add to Cart <FaCartShopping className="text-primary" />
          </a>
        </Flex>

        {item.new && (
          <span className=" absolute top-5 left-5 inline-block py-[9px] px-8 bg-primary font-dm font-bold text-[14px] text-white">
            New
          </span>
        )}
      </div>

      <div className={`pt-6`}>
        <Flex className={`items-center justify-between`}>
          <h2 className=" font-dm font-bold text-[20px] text-primary">
            {item.title}
          </h2>
          <p className=" font-dm font-normal text-[16px] text-secondary">
            ${item.price}
          </p>
        </Flex>

        <p className=" font-dm font-normal text-[16px] text-secondary mt-[15px]">
          Black
        </p>
      </div>
    </div>
  );
};

export default Item;
