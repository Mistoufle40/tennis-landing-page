import React from "react";
import data from "../data.json";

const Hero: React.FC = () => {
  const { title, image } = data.hero;

  return (
    <section className="relative h-1/2-screen md:h-9/10-screen flex items-center justify-center">
      <div
        className="relative w-full h-[75%] flex items-center justify-center md:m-16 overflow-hidden md:rounded-xl shadow-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <h1 className="text-white text-5xl md:text-7xl font-bold text-center">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
