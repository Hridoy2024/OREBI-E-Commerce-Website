import React, { useState } from "react";
import Container from "./Container";
import Slider from "react-slick";
import Item from "./Item";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSelector } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        zIndex: "99999",
        height: "64px",
        width: "64px",
        background: "#979797",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        color: "white",
      }}
      onClick={onClick}
    >
      <IoIosArrowRoundForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        zIndex: "99999",
        height: "64px",
        width: "64px",
        background: "#979797",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        color: "white",
      }}
      onClick={onClick}
    >
      <IoIosArrowRoundBack />
    </div>
  );
}

const SpecialOffer = () => {
  const products = useSelector((state) => state.allProducts.products);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(productsList);
  return (
    <section className="mt-[128px]">
      <Container>
        <h1 className=" mb-12 font-dm font-bold text-[39px] text-primary">
          Special Offers
        </h1>

        <div className="slider-container">
          <Slider {...settings}>
            {products.map((item, i) => (
              <Item item={item} key={i} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default SpecialOffer;
