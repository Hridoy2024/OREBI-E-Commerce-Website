import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import { MdWindow } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import axios from "axios";
import { data } from "autoprefixer";
import PaginationbyGridView from "./PaginationbyGridView";

const ProductComponents = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios.get("https://dummyjson.com/products").then((data) => {
        setProducts(data.data.products);
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <Flex className={` items-center justify-between`}>
        <Flex className={` items-center gap-5`}>
          <div className="p-3 bg-primary ">
            <MdWindow className="text-[15px] text-white" />
          </div>

          <div className=" p-3 bg-white border-[1px] border-solid  ">
            <FaListUl className="text-[15px]" />
          </div>
        </Flex>

        <Flex className={`items-center gap-10`}>
          <Flex className={`items-center gap-[14px]`}>
            <label for="countries" class="block mb-2 text-sm font-medium ">
              Sort by:
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm:block w-[239px] p-2.5 "
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </Flex>

          <Flex className={`items-center gap-[14px]`}>
            <label for="countries" class="block mb-2 text-sm font-medium ">
              Show:
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm:block w-[139px] p-2.5 "
            >
              <option selected>Choose</option>
              <option value="US">36</option>
              <option value="CA">40</option>
              <option value="FR">50</option>
              <option value="DE">60</option>
            </select>
          </Flex>
        </Flex>
      </Flex>

      <div className="mt-[60px]">
        <PaginationbyGridView itemsPerPage={6} products={products} />
      </div>
    </div>
  );
};

export default ProductComponents;
