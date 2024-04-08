import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Flex from "../Components/Flex";
import Image from "../Components/Image";
import { useParams } from "react-router-dom";
import { Rate } from "antd";

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
              ? targetProduct.images.map((img) => (
                  <Image className={`w-[780px] h-[780px] mb-10`} src={img} />
                )) : "Img"}
                
          </Flex>

          <div className="w-[780px]">
            <h1 className="font-dm text-[39px] font-bold text-primary ">
              {targetProduct ? targetProduct.title : "Product Name"}
            </h1>

            <Flex className={`items-center gap-6 mt-[15px] `}>
              <Rate defaultValue={5} />

              <span className="font-dm font-normal text-[14px] text-secondary ">
                1 Review
              </span>
            </Flex>

            <Flex
              className={`items-center gap-[22px] mt-[24px] pb-6 border-b-[1px] border-secondary`}
            >
              <del className="font-dm font-normal text-[16px] text-secondary">
                $88.00
              </del>

              <h2 className="font-dm font-bold text-[20px] text-primary">
                $44.00
              </h2>
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Product;
