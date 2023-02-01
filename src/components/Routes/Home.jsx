import React from "react";
import {
  Hero,
  Mission,
  DataInfo,
  Article,
  Contribution,
  Footer,
} from "../index";
const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Mission />
        <DataInfo />
        <Article />
        <Contribution />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
