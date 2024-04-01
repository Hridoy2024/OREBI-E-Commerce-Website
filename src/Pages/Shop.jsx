import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Flex from "../Components/Flex";
import Listul from "./../Components/Listul";
import ShopByCategory from "../Components/ShopByCategory";
import ShopByColor from "../Components/ShopByColor";
import ShopByBrand from "../Components/ShopByBrand";
import ShopByPrice from "../Components/ShopByPrice";
import ProductComponents from "../Components/ProductComponents";
import { useSelector } from "react-redux";

const Shop = ({ title }) => {
  const products = useSelector((state) => state.allProducts.products);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [filterResult, setFilterResult] = useState([]);

  useEffect(() => {
    setUniqueCategory([...new Set(products.map((p) => p.category))]);
    setFilterResult(products);
  }, [products]);

  const handleFilter = (cat) => {
    console.log(cat);
    const filterProduct = products.filter((p) => p.category == cat);
    setFilterResult(filterProduct);
  };

  const showAllProducts = () => {
    setFilterResult(products);
  };

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
                <ShopByCategory
                  onClick={showAllProducts}
                  categoryName={"All"}
                  option={false}
                />
                {uniqueCategory.map((cat, i) => {
                  return (
                    <ShopByCategory
                      onClick={handleFilter}
                      categoryName={cat}
                      option={false}
                      key={i}
                    />
                  );
                })}
              </Listul>

              <ShopByColor />
              <ShopByBrand />
              <ShopByPrice />
            </div>
          </div>
          <div className="w-9/12">
            <ProductComponents products={filterResult} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
