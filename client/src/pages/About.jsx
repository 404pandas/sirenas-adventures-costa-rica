import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Employee from "../components/Employee/Employee";
import Boat from "../components/Boat/Boat";

const About = () => {
  const [currentSection, setCurrentSection] = useState("staff");
  const location = useLocation();

  const employees = [
    {
      name: "Scott Jackson",
      position: "PADI IDC Instructor",
      bio: "Scott is a PADI IDC Staff Instructor with over 40 years of experience in the diving industry. He has a passion for teaching and sharing his love for the ocean.",
    },
    {
      name: "Roy Mallioux",
      position: "PADI Divemaster Leader",
      bio: "Roy is a PADI Divemaster Leader with extensive experience in leading dives and ensuring the safety of divers. He is known for his friendly demeanor and professionalism.",
    },
    {
      name: "Santos Cordoba",
      position: "Captain",
      bio: "Santos is a skilled captain with years of experience navigating the waters of the Caribbean. He is dedicated to providing a safe and enjoyable experience for all guests.",
    },
  ];

  const boats = [
    {
      name: "Mi Reina Grace",
      diverSeats: 8,
      totalSeats: 14,
      description: "A spacious boat with comfortable seating and amenities.",
    },
    {
      name: "Trueno",
      diverSeats: 10,
      totalSeats: 22,
      description: "A fast boat designed for quick trips to dive sites.",
    },
    {
      name: "Tiburon",
      diverSeats: 6,
      totalSeats: 8,
      description: "A smaller boat perfect for intimate dive experiences.",
    },
  ];

  const handleSectionChange = () => {
    setCurrentSection((prevSection) =>
      prevSection === "staff" ? "boats" : "staff"
    );
    window.history.replaceState(
      null,
      "",
      `#${currentSection === "staff" ? "boats" : "staff"}`
    );
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "boats" || hash === "staff") {
      setCurrentSection(hash);
    }
  }, [location]);

  return (
    <div className='relative h-screen'>
      {/* Staff Section */}
      <div
        id='staff'
        className={`mx-auto px-4 py-8 absolute inset-0 transition-opacity duration-500 w-9/12 ${
          currentSection === "staff"
            ? "z-10 opacity-100"
            : "z-0 opacity-0 pointer-events-none"
        }`}
      >
        <h2 className='text-2xl font-bold text-center mb-4'>Our Staff</h2>
        <div className='flex flex-wrap justify-center space-x-4'>
          {employees.map((emp, idx) => (
            <Employee
              key={idx}
              name={emp.name}
              position={emp.position}
              bio={emp.bio}
            />
          ))}
        </div>
        <HiChevronRight
          className='absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl cursor-pointer'
          onClick={handleSectionChange}
        />
      </div>

      {/* Boats Section */}
      <div
        id='boats'
        className={`absolute inset-0 transition-opacity duration-500 container mx-auto px-4 py-8 ${
          currentSection === "boats"
            ? "z-10 opacity-100"
            : "z-0 opacity-0 pointer-events-none"
        }`}
      >
        <h2 className='text-2xl font-bold text-center mb-4'>Our Boats</h2>
        <div className='flex flex-wrap justify-center space-x-4'>
          {boats.map((boat, idx) => (
            <Boat
              key={idx}
              name={boat.name}
              diverSeats={boat.diverSeats}
              totalSeats={boat.totalSeats}
              description={boat.description}
            />
          ))}
        </div>
        <HiChevronLeft
          className='absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl cursor-pointer'
          onClick={handleSectionChange}
        />
      </div>
    </div>
  );
};

export default About;
