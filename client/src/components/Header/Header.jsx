import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section className="relative bg-gray-800">
        <div className="relative flex flex-col items-center justify-center min-h-half py-16 px-8 text-center text-white">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Sirenas Adventures
          </h1>
          <p className="text-lg mb-8">
            Dad is gunna write something super cool here about how he picks
            people up at their dock and takes them on a super cool adventure.
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Header;
