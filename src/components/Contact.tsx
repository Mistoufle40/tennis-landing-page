import React from "react";
import data from "../data.json";

const Contact: React.FC = () => (
  <section id="contact" className="py-12 text-black">
    <div className="flex justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4 text-terre-battue">
          {data.contact.title}
        </h2>
        <p className="mb-4">{data.contact.description}</p>
        <div className="mb-4">
          <p>
            Email:{" "}
            <a
              href={`mailto:${data.contact.email}`}
              className="underline text-terre-battue"
            >
              {data.contact.email}
            </a>
          </p>
          <p>
            Téléphone:{" "}
            <a
              href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
              className="underline text-terre-battue"
            >
              {data.contact.phone}
            </a>
          </p>
        </div>
        <a
          href={`mailto:${data.contact.email}`}
          className="bg-white text-terre-battue px-4 py-2 rounded-xl hover:bg-terre-battue hover:text-white transition border-terre-battue border-2"
        >
          Contacter
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
