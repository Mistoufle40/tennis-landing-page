import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import data from "../data.json";

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">Suivez-nous sur les réseaux sociaux :</p>
        <div className="flex justify-center items-center gap-6">
          <a
            href={data.footer.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex items-center justify-center text-[#3b5998] hover:text-terre-battue transition"
          >
            <FaFacebookF className="w-7 h-7" />
          </a>
          <a
            href={data.footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center text-[#0e76a8] hover:text-terre-battue transition"
          >
            <FaLinkedinIn className="w-7 h-7" />
          </a>
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()} {data.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
