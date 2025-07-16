import React, { useEffect, useRef, useState } from "react";
import data from "../data.json";

const Palmares: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const isMobile = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      isMobile.current = window.innerWidth < 768;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation automatique
  useEffect(() => {
    if (!isMobile.current) return;
    const timer = setInterval(() => {
      handleSlide("left");
    }, 2500);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [current]);

  // Fonction pour gérer le slide avec animation
  const handleSlide = (dir: "left" | "right", index?: number) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      if (typeof index === "number") {
        setCurrent(index);
      } else {
        setCurrent((prev) =>
          dir === "left"
            ? (prev + 1) % data.palmares.length
            : (prev - 1 + data.palmares.length) % data.palmares.length
        );
      }
      setAnimating(false);
    }, 250); // durée de l'animation en ms
  };

  // Gestion du swipe tactile
  let touchStartX = 0;
  let touchEndX = 0;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 40) {
      handleSlide("left");
    } else if (touchEndX - touchStartX > 40) {
      handleSlide("right");
    }
  };

  return (
    <section
      className="w-full py-12 flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${data.backgrounds.palmares})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="w-full max-w-4xl relative z-10">
        <h2 className="text-3xl font-bold text-center text-terre-battue mb-8">
          Palmarès
        </h2>
        {/* Desktop: liste */}
        <div className="hidden md:grid gap-6 w-full">
          {data.palmares.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-lg flex flex-col md:flex-row items-center mb-6 p-6"
            >
              <div className="text-terre-battue text-2xl font-bold md:w-32 w-full text-center md:text-left mb-2 md:mb-0">
                {item.year}
              </div>
              <div className="flex-1 md:ml-6">
                <div className="text-xl font-semibold text-black">
                  {item.title}
                </div>
                <div className="text-gray-700">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile: carrousel animé */}
        <div className="md:hidden select-none">
          <div
            className={`bg-gray-50 rounded-xl shadow-lg flex flex-col items-center p-6 duration-300 ${
              animating
                ? direction === "left"
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="text-terre-battue text-2xl font-bold w-full text-center mb-2">
              {data.palmares[current].year}
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-black text-center">
                {data.palmares[current].title}
              </div>
              <div className="text-gray-700 text-center">
                {data.palmares[current].desc}
              </div>
            </div>
          </div>
          {/* Petits points de navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {data.palmares.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-terre-battue" : "bg-gray-400"
                } inline-block`}
                onClick={() => handleSlide(i > current ? "left" : "right", i)}
                aria-label={`Voir le palmarès ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Palmares;
