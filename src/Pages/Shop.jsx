import React from "react";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Flex from "../Components/Flex";
import Listul from "./../Components/Listul";
import ShopByCategory from "../Components/ShopByCategory";
import ShopByColor from "../Components/ShopByColor";
import ShopByBrand from "../Components/ShopByBrand";
import ShopByPrice from "../Components/ShopByPrice";
import ProductComponents from "../Components/ProductComponents";

const Shop = ({ title }) => {
  return (
    <section className="mt-[124px]">
      <Container>
        <Breadcums title={title} />

        <Flex className={`mt-[130px]`}>
          <div className="w-3/12">
            <div>
              <h2 className="font-dm font-bold text-[20px] text-primary">
                Shop by Category
              </h2>

              <Listul>
                <ShopByCategory categoryName="Category 1" option={true} />
                <ShopByCategory categoryName="Category 2" option={false} />
                <ShopByCategory categoryName="Category 3" option={true} />
                <ShopByCategory categoryName="Category 4" option={false} />
              </Listul>

              <ShopByColor />
              <ShopByBrand />
              <ShopByPrice />
            </div>
          </div>
          <div className="w-9/12">
            <ProductComponents/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
