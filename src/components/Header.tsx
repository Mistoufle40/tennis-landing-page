import React from "react";
import data from "../data.json";

const navLinkClass =
  "text-black hover:underline hover:text-terre-battue text-lg md:text-xl font-semibold font-sans md:mr-8 hover:cursor-pointer transition-colors duration-200";
const navLinkStyle = { fontFamily: "'Montserrat', Arial, sans-serif" };

const Header: React.FC = () => {
  const { email, phone, nav, logo } = data.header;
  return (
    <header className="bg-white p-4">
      <div
        className="w-full flex flex-col md:flex-row justify-between items-center px-0"
        style={{ maxWidth: "100vw" }}
      >
        <img
          src={logo}
          alt="Tennis Logo"
          className="h-20 mb-4 md:mb-0 md:mr-8 md:ml-12"
        />
        <nav className="flex flex-row items-center justify-evenly md:justify-start w-full">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={navLinkClass}
              style={navLinkStyle}
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/* Bloc contact desktop en haut à droite */}
        <div className="hidden md:flex flex-col items-end ml-6">
          <a
            href={`mailto:${email}`}
            className="text-xs font-semibold hover:underline text-black hover:text-terre-battue"
          >
            {email}
          </a>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-xs text-black font-semibold hover:underline hover:text-terre-battue mt-1"
          >
            {phone}
          </a>
        </div>
      </div>
      {/* Ligne de séparation centrée, largeur 2/3 */}
      <div className="flex justify-center mt-4 mx-12">
        <div className="w-full h-px bg-gray-300 rounded"></div>
      </div>
      {/* Bloc contact mobile */}
      <div className="flex md:hidden justify-center items-center gap-4 mt-2">
        <a
          href={`mailto:${email}`}
          className="text-xs text-black hover:text-terre-battue font-semibold hover:underline"
        >
          {email}
        </a>
        <span className="text-terre-battue font-bold">|</span>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-xs text-black hover:text-terre-battue font-semibold hover:underline"
        >
          {phone}
        </a>
      </div>
    </header>
  );
};

export default Header;
