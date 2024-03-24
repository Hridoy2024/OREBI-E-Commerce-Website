import React, { useState } from "react";
import Flex from "./Flex";
import { MdWindow } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { data } from "autoprefixer";
import PaginationbyGridView from "./PaginationbyGridView";
import PaginationForListView from "./PaginationForListView";

const ProductComponents = ({ products }) => {
  const [showProducts, setShowProducts] = useState(6);
  const [view, setView] = useState("grid");
  const toggleView = (v) => {
    setView(v);
  };

  return (
    <div>
      <Flex className={` items-center justify-between`}>
        <Flex className={` items-center gap-5`}>
          <div
            onClick={() => toggleView("grid")}
            className={`p-3 ${
              view === "grid"
                ? "bg-primary"
                : "bg-white border-[1px] border-solid "
            } `}
          >
            <MdWindow
              className={`text-[15px]  ${
                view === "grid" ? "text-white" : "text-primary"
              } `}
            />
          </div>

          <div
            onClick={() => toggleView("list")}
            className={`p-3  border-[1px] border-solid ${
              view === "list" ? "bg-primary" : "bg-white"
            } `}
          >
            <FaListUl
              className={`text-[15px]${
                view === "list" ? "text-white" : "text-primary"
              } `}
            />
          </div>
        </Flex>

        <Flex className={`items-center gap-10`}>
          <Flex className={`items-center gap-[14px]`}>
            <label for="countries" class="block mb-2 text-sm font-medium ">
              Sort by:
            </label>
            <select
              onChange={(e) => setShowProducts(e.target.value)}
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
              onChange={(e) => setShowProducts(parseInt(e.target.value))}
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm:block w-[139px] p-2.5 "
            >
              <option value={6} selected>
                6
              </option>
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </Flex>
        </Flex>
      </Flex>

      <div className="mt-[60px]">
        {view == "grid" ? (
          <PaginationbyGridView
            itemsPerPage={showProducts}
            products={products}
          />
        ) : (
          <PaginationForListView
            itemsPerPage={showProducts}
            products={products}
          />
        )}
      </div>
    </div>
  );
};

export default ProductComponents;
