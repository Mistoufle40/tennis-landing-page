import React from "react";
import data from "../data.json";

const About: React.FC = () => {
  const { title, description1, description2, coachImage } = data.about;
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={coachImage}
          alt="Ricardo Sanchez, coach de tennis"
          className="w-64 h-64 object-cover rounded-full shadow-lg mb-6 md:mb-0"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-terre-battue text-center md:text-left">
            {title}
          </h2>
          <p className="text-lg text-gray-700 mb-4">{description1}</p>
          <p className="text-lg text-gray-700">{description2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
