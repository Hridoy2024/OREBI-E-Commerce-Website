import React, { useState } from "react";
import Image from "../Components/Image";
import BannerImage from "../assets/banner.png";
import Container from "./Container";
import Flex from "./Flex";
import { FaTruck } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
  const [slide, setSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i == slide
            ? {
                padding: "5px 0",
                width: "30px",
                color: "#262626",
                borderRight: "2px #262626 solid",
              }
            : {
                padding: "5px 0",
                width: "30px",
                color: "white",
                borderRight: "2px white solid",
              }
        }
      >
        0{i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <Slider {...settings}>
        <Image src={BannerImage} />
        <Image src={BannerImage} />
        <Image src={BannerImage} />
        <Image src={BannerImage} />
      </Slider>
      <div className="bg-white py-[30px]">
        <Container>
          <Flex className={`justify-between flex-col md:flex-row `}>
            <Flex
              className={`items-center gap-[17px] justify-center my-3 md:my-0`}
            >
              <span className="font-dm font-bold text-[30px]">2</span>
              <p className="font-dm font-normal text-[16px] text-[#6D6D6D]">
                Two years warranty
              </p>
            </Flex>

            <Flex
              className={`items-center gap-[15px] justify-center my-3 md:my-0`}
            >
              <FaTruck size={25} />
              <p className="font-dm font-normal text-[16px] text-[#6D6D6D]">
                Free shipping
              </p>
            </Flex>

            <Flex
              className={`items-center gap-[15px] justify-center my-3 md:my-0`}
            >
              <VscDebugRestart size={25} />
              <p className="font-dm font-normal text-[16px] text-[#6D6D6D]">
                Return policy in 30 days
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
