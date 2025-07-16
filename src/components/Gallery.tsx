import React from "react";

const Gallery: React.FC = () => {
  const images = [
    "/assets/images/gazonhead.jpg",
    "/assets/images/gazonhead.jpg",
    "/assets/images/gazonhead.jpg",
    "/assets/images/gazonhead.jpg",
    "/assets/images/gazonhead.jpg",
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-terre-battue">
        Galerie
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg ">
            <img
              src={image}
              alt={`Tennis activity ${index + 1}`}
              className="w-full h-auto max-h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
