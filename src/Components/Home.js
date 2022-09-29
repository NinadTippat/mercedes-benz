import React from "react";
import All_Cars from "./All_Cars";
import Banner from "./Banner";
import Container from "./Container";
import Footer from "./Footer";
import Nav from "./Nav";
import Text from "./Text";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Container />
      <All_Cars />
      <Text />
      <Footer />
    </div>
  );
};

export default Home;
