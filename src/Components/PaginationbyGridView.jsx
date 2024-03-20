import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Flex from "./Flex";
import Item from "./Item";

const PaginationbyGridView = ({ itemsPerPage, products }) => {
  const items = products;

  function Items({ currentItems }) {
    return (
      <>
        <Flex className={`flex-wrap`}>
          {currentItems &&
            currentItems.map((item) => (
              <Item item={item} className={`mb-[50px]`} />
            ))}
        </Flex>
      </>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Flex className={`items-center justify-between mt-[50px]`}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          className="flex gap-[15px]"
          pageClassName="p-5 border-[1px] border-solid "
          activeClassName="bg-primary text-white"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        />

        <h1>Products form {itemOffset} to {endOffset} of {products.length}</h1>
      </Flex>
    </>
  );
};

export default PaginationbyGridView;
