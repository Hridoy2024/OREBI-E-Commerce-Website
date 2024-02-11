import React from "react";
import Banner from "../Components/Banner";
import Advertisement from "../Components/Advertisement";
import NewArrivals from "../Components/NewArrivals";
import Item from "../Components/Item";

const Home = () => {
  return (
    <section>
      <Banner />
      <Advertisement />
      <NewArrivals />
    </section>
  );
};

export default Home;
