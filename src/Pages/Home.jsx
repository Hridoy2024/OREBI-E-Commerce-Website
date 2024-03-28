import React from "react";
import Banner from "../Components/Banner";
import Advertisement from "../Components/Advertisement";
import NewArrivals from "../Components/NewArrivals";
import BestSeller from "../Components/BestSeller";
import BestProduct from "../Components/BestProduct";
import SpecialOffer from "../Components/SpecialOffer";
import About from "./About";

const Home = () => {
  return (
    <section>
      <Banner />
      <Advertisement />
      <NewArrivals />
      <BestSeller/>
      <BestProduct/>
      <SpecialOffer/>
      {/* <About/> */}
    </section>
  );
};

export default Home;
