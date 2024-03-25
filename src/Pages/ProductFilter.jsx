import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";
import Item from "../Components/Item";
import Flex from "../Components/Flex";

const ProductFilter = ({ title }) => {
  const location = useLocation();
  const [filterResult, setFilterResult] = useState(location.state.key);

  // console.log(filterResult);
  return (
    <section className="mt-[124px]">
      <Container>
        <Breadcums title={title} />

        <Flex className={`flex-wrap`}>
          {filterResult.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default ProductFilter;
