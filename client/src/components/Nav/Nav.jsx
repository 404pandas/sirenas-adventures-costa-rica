import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const pages = [
  // first
  {
    main: "About Us",
    path: "/about",
    options: [
      { id: "staff", label: "Staff" },
      { id: "boats", label: "Boats" },
    ],
  },
  // second
  {
    main: "Adventures",
    path: "/adventures",
    options: [
      { id: "scuba-diving", label: "Scuba Diving" },
      { id: "snorkeling", label: "Snorkeling" },
      { id: "beach-tour", label: "Beach Tour" },
      { id: "bioluminescence-snorkel", label: "Bioluminescence Snorkel" },
      { id: "fishing", label: "Fishing" },
      { id: "surfing", label: "Surfing" },
      { id: "sunset-tour", label: "Sunset Tour" },
      { id: "discover-scuba", label: "Discover Scuba" },
    ],
  },
  // third

  {
    main: "Education",
    path: "/education",
    options: [
      { id: "open-water", label: "Open Water" },
      { id: "advanced", label: "Advanced" },
      { id: "rescue", label: "Rescue" },
      { id: "dive-master", label: "Dive Master" },
      { id: "assistant-instructor", label: "Assistant Instructor" },
      {
        id: "specialties",
        label: "Specialites",
        subOptions: [
          { id: "deep-diver", label: "Deep Diver" },
          { id: "night-diver", label: "Night Diver" },
          { id: "wreck-diver", label: "Wreck Diver" },
          { id: "enriched-air-diver", label: "Enriched Air (Nitrox) Diver" },
          { id: "drift-diver", label: "Drift Diver" },
          { id: "underwater-photographer", label: "Underwater Photographer" },
          { id: "underwater-naturalist", label: "Underwater Naturalist" },
          { id: "search-and-recovery", label: "Search and Recovery Diver" },
          {
            id: "peak-performance-buoyancy",
            label: "Peak Performance Buoyancy",
          },
          { id: "dry-suit-diver", label: "Dry Suit Diver" },
          { id: "boat-diver", label: "Boat Diver" },
          { id: "ice-diver", label: "Ice Diver" },
          { id: "altitude-diver", label: "Altitude Diver" },
          { id: "multilevel-diver", label: "Multilevel Diver" },
          { id: "sidemount-diver", label: "Sidemount Diver" },
          { id: "fish-identification", label: "Fish Identification" },
        ],
      },
    ],
  },
  // fourth

  {
    main: "Destinations",
    path: "/destinations",
    options: [
      { id: "gulf-of-papagayo", label: "Gulf of Papagayo" },
      { id: "catalina-islands", label: "Catalina Islands" },
      { id: "bat-islands", label: "Bat Islands" },
    ],
  },
  // fifth
  {
    main: "Equipment",
    path: "/equipment",
    options: [
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
      { id: "option-3", label: "Option 3" },
      { id: "option-4", label: "Option 4" },
    ],
  },
];

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Navbar fluid rounded className="sticky top-0 z-50">
      <Navbar.Link onClick={() => navigate("/")}>Home</Navbar.Link>
      <Navbar.Collapse>
        {pages.map((page) => (
          <Dropdown inline label={page.main} key={page.main}>
            {page.options.map((option) => (
              <Dropdown.Item
                key={option.id}
                onClick={() => navigate(`${page.path}#${option.id}`)}
              >
                <span>{option.label}</span>{" "}
                {/* Use <span> to prevent <a> nesting */}
              </Dropdown.Item>
            ))}
          </Dropdown>
        ))}
      </Navbar.Collapse>

      <Navbar.Toggle />
    </Navbar>
  );
};

export default Nav;
