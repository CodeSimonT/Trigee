import React from "react";
import { Herosection } from "../assets";
const Hero = () => {
  return (
    <section className="relative flex justify-center items-center">
      <img src={Herosection} alt="" className="z-0 w-full h-full" />
      <div className="absolute w-[100%] h-[100%] bg-black top-0 right-0 z-[2] opacity-[0.5]" />
      <div className="absolute z-[3] flex justify-center items-center flex-col text-center opacity-100">
        <h1
          className="text-[20px] xs:text-[30px] sm:text-[40px] 
        md:text-[50px] font-semibold text-center"
        >
          <span className="text-secondary">Healthy</span> Children Leads to{" "}
          <br />
          Healthy <span className="text-secondary">Society</span>
        </h1>
        <p className="text-[5px] xs:text-[10px] md:text-[13px]  max-w-[250px] xs:max-w-[350px] md:max-w-[450px] mt-3">
          Healthy eating is not about strict dietary limitations, staying
          unrealistically thin, or depriving yourself of the foods you love.
          Rather, it's about feeling great, having more energy, improving your
          health, and boosting your mood.
        </p>
      </div>
    </section>
  );
};

export default Hero;
