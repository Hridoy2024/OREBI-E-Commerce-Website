import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Flex from "../Components/Flex";
import Image from "../Components/Image";
import { useParams } from "react-router-dom";
// import { Rate } from "antd";
import StarRating from "../Components/StarRating";
// import Flex from "./../Components/Flex";

const Product = ({ title }) => {
  const [targetProduct, setTargetProduct] = useState({});
  const { productID } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`).then((data) => {
      setTargetProduct(data.data);
    });
  });

  return (
    <section className="mt-[123px]">
      <Container>
        <Breadcums title={title} />

        <div className="mt-[130px]">
          <Flex className={`flex-wrap justify-between `}>
            {targetProduct
              ? targetProduct.images?.map((img) => (
                  <Image
                    className={`w-[780px] h-[780px] mb-10 object-cover `}
                    src={img}
                  />
                ))
              : "Img"}
          </Flex>

          <div className="w-[780px]">
            <h1 className="font-dm text-[39px] font-bold text-primary ">
              {targetProduct ? targetProduct.title : "Product Name"}
            </h1>

            <Flex className={`items-center gap-6 mt-[15px] `}>
              <StarRating
                starCount={targetProduct ? targetProduct.rating : 5}
              />

              <span className="font-dm font-normal text-[14px] text-secondary ">
                1 Review
              </span>
            </Flex>

            <Flex
              className={`items-center gap-[22px] mt-[24px] pb-6 border-b-[1px] border-secondary`}
            >
              <del className="font-dm font-normal text-[16px] text-secondary">
                ${targetProduct ? targetProduct.price : 10}
              </del>

              <h2 className="font-dm font-bold text-[20px] text-primary">
                $
                {targetProduct
                  ? Math.round(
                      targetProduct.price -
                        (targetProduct.price *
                          targetProduct.discountPercentage) /
                          100
                    )
                  : 10}
              </h2>
            </Flex>

            <div className="py-[30px] border-b-[1px] border-gray-300">
              <Flex className={`items-center gap-[53px] mb-[30px]`}>
                <p className="font-dm font-bold text-[16px] leading-[23px] text-primary uppercase">
                  Color:
                </p>

                <Flex className={`gap-4`}>
                  <div className="w-5 h-5 rounded-full bg-[#979797] hover:scale-150"></div>
                  <div className="w-5 h-5 rounded-full bg-[#FF8686] hover:scale-150"></div>
                  <div className="w-5 h-5 rounded-full bg-[#7ED321] hover:scale-150"></div>
                  <div className="w-5 h-5 rounded-full bg-[#B6B6B6] hover:scale-150"></div>
                  <div className="w-5 h-5 rounded-full bg-[#15CBA5] hover:scale-150"></div>
                </Flex>
              </Flex>

              <Flex className={`items-center gap-[29px] mb-[30px]`}>
                <p className="font-dm font-bold text-[16px] leading-[23px] text-primary uppercase">
                  SIZE:
                </p>
                <Flex className={`items-center gap-[14px]`}>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-[139px] p-2.5"
                  >
                    <option value="US">S</option>
                    <option value="US">L</option>
                    <option value="US">XL</option>
                    <option value="US">XXL</option>
                  </select>
                </Flex>
              </Flex>

              <Flex className={`items-center gap-[29px] `}>
                <p className="font-dm font-bold text-[16px] leading-[23px] text-primary uppercase">
                  Quantity:
                </p>

                <Flex className={`w-[139px] border-[1px] border-gray-300 `}>
                  <button className="w-1/3 py-2">-</button>
                  <button className="w-1/3 py-2">1</button>
                  <button className="w-1/3 py-2">+</button>
                </Flex>
              </Flex>
            </div>

            <Flex
              className={`py-5 border-b-[1px] border-gray-300 items-center gap-[27px]`}
            >
              <p className="font-dm font-bold text-[16px] leading-[23px] text-primary uppercase ">
                Status:
              </p>

              <span className="text-[16px] font-dm font-normal leading-[3px] text-secondary">
                In Stoke ({targetProduct ? targetProduct.stock : 100})
              </span>
            </Flex>

            <Flex className={`py-[30px] border-b-[1px] border-gray-300 gap-5 `}>
              <button className="font-dm font-bold text-[14px] border-[1px] border-primary py-4 px-10 bg-white text-primary">
                Add to Wish List
              </button>
              <button className="font-dm font-bold text-[14px] border-[1px] border-primary py-4 px-10 bg-primary text-white">
                Add to Cart
              </button>
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Product;
