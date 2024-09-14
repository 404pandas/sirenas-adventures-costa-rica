import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import "./nav.css";

const pages = [
  // first
  {
    main: "About Us",
    path: "/about",
    options: [
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
      { id: "option-3", label: "Option 3" },
      { id: "option-4", label: "Option 4" },
    ],
  },
  // second
  {
    main: "Adventures",
    path: "/adventures",
    options: [
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
      { id: "option-3", label: "Option 3" },
      { id: "option-4", label: "Option 4" },
    ],
  },
  // third

  {
    main: "Education",
    path: "/education",
    options: [
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
      { id: "option-3", label: "Option 3" },
      { id: "option-4", label: "Option 4" },
    ],
  },
  // fourth

  {
    main: "Destinations",
    path: "/destinations",
    options: [
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2" },
      { id: "option-3", label: "Option 3" },
      { id: "option-4", label: "Option 4" },
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
  return (
    <Navbar fluid rounded className="sticky top-0 z-50">
      <Navbar.Link>
        <Link to="/">Home</Link>
      </Navbar.Link>
      <Navbar.Collapse>
        {pages.map((page) => (
          <Dropdown inline label={page.main} key={page.main}>
            {page.options.map((option) => (
              <Dropdown.Item key={option.id}>
                <Link to={`${page.path}#${option.id}`}>{option.label}</Link>
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
