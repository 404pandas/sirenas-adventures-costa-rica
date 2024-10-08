import React, { useState } from "react";
import { Card } from "flowbite-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Import arrow icons

const About = () => {
  const [currentSection, setCurrentSection] = useState("staff");

  const handleSectionChange = () => {
    setCurrentSection((prevSection) =>
      prevSection === "staff" ? "boats" : "staff"
    );
  };

  return (
    <div className="relative h-screen">
      {/* Staff Section */}
      <div
        id="staff"
        className={`mx-auto px-4 py-8 absolute inset-0 transition-transform duration-500 w-9/12 ${
          currentSection === "staff" ? "z-10" : "z-0 opacity-50"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Our Staff</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {["staff1.jpg", "staff2.jpg", "staff3.jpg"].map((staff, idx) => (
            <Card key={idx} className="w-1/3">
              <img
                src={staff}
                alt={`Staff member ${idx + 1}`}
                className="rounded-full w-32 h-32 mx-auto"
              />
              <p className="text-center mt-2">Staff Member {idx + 1}</p>
            </Card>
          ))}
        </div>
        <HiChevronRight
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl cursor-pointer"
          onClick={handleSectionChange}
        />
      </div>

      {/* Boats Section */}
      <div
        id="boats"
        className={`absolute inset-0 transition-transform duration-500 container mx-auto px-4 py-8 ${
          currentSection === "boats" ? "z-10" : "z-0 opacity-50"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Our Boats</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {["boat1.jpg", "boat2.jpg", "boat3.jpg"].map((boat, idx) => (
            <Card key={idx} className="w-1/3">
              <img
                src={boat}
                alt={`Boat ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
              <p className="text-center mt-2">Boat {idx + 1}</p>
            </Card>
          ))}
        </div>
        <HiChevronLeft
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl cursor-pointer"
          onClick={handleSectionChange}
        />
      </div>
    </div>
  );
};

export default About;
