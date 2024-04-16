import React from "react";
import Container from "./Container";

const Error = () => {
  return (
    <section>
      <Container>
        <h1 className="font-dm font-bold text-[200px] text-primary ">404</h1>
        <p className="font-dm font-normal text-[20px] text-secondary leading-[30px] w-[750px] mt-2 ">
          The page you were looking for couldn't be found. The page could be
          removed or you misspelled the word while searching for it. Maybe try a
          search?
        </p>
      </Container>
    </section>
  );
};

export default Error;
