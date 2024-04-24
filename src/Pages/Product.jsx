import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Flex from "../Components/Flex";
import Image from "../Components/Image";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import StarRating from "../Components/StarRating";
import { TiMinus, TiPlus } from "react-icons/ti";
import { CartReducer } from "../slices/CartSlice";

const Product = ({ title }) => {
  const dispatch = useDispatch();
  const [targetProduct, setTargetProduct] = useState({});
  const { productID } = useParams();
  const [shipping, setShipping] = useState(true);
  const [section, setSection] = useState("review");

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`).then((data) => {
      setTargetProduct(data.data);
    });
  }, []);

  const addTocart = (item) => {
    dispatch(CartReducer({ ...item, qun: 1 }));
  };

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
              <button
                onClick={() => addTocart(targetProduct)}
                className="font-dm font-bold text-[14px] border-[1px] border-primary py-4 px-10 bg-primary text-white"
              >
                Add to Cart
              </button>
            </Flex>

            <Flex
              className={`py-6 border-b-[1px] border-solid items-center justify-between`}
            >
              <h2 className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                FEATURES & DETAILS
              </h2>

              <TiPlus />
            </Flex>

            <div>
              <Flex
                className={`py-[30px] border-b-[1px] justify-between items-center `}
              >
                <h2 className="font-dm font-bold text-[16px] leading-[27px]  ">
                  SHIPPING & RETURNS
                </h2>
                {shipping ? (
                  <TiMinus onClick={() => setShipping(!shipping)} />
                ) : (
                  <TiPlus onClick={() => setShipping(!shipping)} />
                )}
              </Flex>

              <Flex>
                {shipping && (
                  <p className=" py-[19px] text-secondary font-dm text-[16px] font-normal leading-[30px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                )}
              </Flex>
            </div>

            <div className="mt-[123px]">
              <Flex className={` items-center gap-[62px]`}>
                <h2
                  onClick={() => setSection("desc")}
                  className={` font-dm  text-[20px] ${
                    section == "desc"
                      ? "text-primary font-bold"
                      : "text-secondary font-normal"
                  } leading-[29px] cursor-pointer`}
                >
                  Description
                </h2>

                <h2
                  onClick={() => setSection("review")}
                  className={` font-dm  text-[20px] ${
                    section == "review"
                      ? "text-primary font-bold"
                      : "text-secondary font-normal"
                  } leading-[29px] cursor-pointer`}
                >
                  Reviews (1)
                </h2>
              </Flex>

              <div className="mt-[42px]">
                {section == "review" ? (
                  <div>
                    <p className=" pb-4 border-b-[1px] border-solid font-dm font-normal text-[14px] leading-[30px] text-secondary">
                      1 review for Product
                    </p>

                    <div className="pt-6 pb-4 border-b-[1px] border-solid">
                      <Flex className={`items-center justify-between`}>
                        <Flex className={`items-center gap-[37px]`}>
                          <h1 className=" font-dm font-normal text-[16px] leading-[30px] text-primary">
                            John Ford
                          </h1>
                          <Flex>
                            <Rate defaultValue={5} />
                          </Flex>
                        </Flex>

                        <span className=" font-dm font-normal text-[16px] text-secondary">
                          6 months ago
                        </span>
                      </Flex>

                      <p className=" font-dm font-normal text-[16px] leading-[30px] text-secondary mt-[14px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className=" font-dm font-normal text-[16px] leading-[30px] text-secondary mt-[14px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                )}

                <form action="" className="mt-[53px] mb-[341px]  ">
                  <h1 className="mb-12 font-dm font-bold text-[20px] text-primary">
                    Add a Review
                  </h1>

                  <div className="mb-[23px]">
                    <label
                      className=" font-dm font-bold text-[16px] leading-[23px] text-primary"
                      htmlFor=""
                    >
                      Name
                    </label>

                    <input
                      className="w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                      type="text"
                      placeholder="Your name here"
                    />
                  </div>
                  <div className="mb-[23px]">
                    <label className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                      Email
                    </label>

                    <input
                      className=" w-full block border-b border-[#f0f0f0] pt-[10px] pb-[16px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                      type="email"
                      placeholder="Your email here"
                    />
                  </div>

                  <div className="mb-[23px]">
                    <label className=" font-dm font-bold text-[16px] leading-[23px] text-primary">
                      Review
                    </label>

                    <input
                      className=" w-full block border-b border-[#f0f0f0] pt-[10px] pb-[86px] placeholder:font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary"
                      type="text"
                      placeholder="Your review here"
                    />
                  </div>

                  <button
                    className=" font-dm font-bold text-[14px] text-white py-4 px-[88px] bg-primary"
                    type="submit"
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Product;
