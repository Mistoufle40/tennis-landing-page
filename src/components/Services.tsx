import React from "react";
import data from "../data.json";

const Services: React.FC = () => (
  <section id="services" className="py-16 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center text-terre-battue mb-10">
        Prestations & Tarifs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600 mb-4">{s.desc}</p>
            <span className="inline-block bg-terre-battue text-white px-4 py-2 rounded-full font-bold">
              {s.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
