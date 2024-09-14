import React from "react";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsSignNoParking,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

import "./mefooter.css";

const socialMedia = [
  {
    smName: "Facebook",
    url: "https://www.facebook.com/share/TPgyuvwtAhMWbUt6/?mibextid=qi2Omg",
    icon: BsFacebook,
  },
  {
    smName: "Instagram",
    url: "https://www.instagram.com/sirenasadventurescostarica/",
    icon: BsInstagram,
  },
  {
    smName: "Twitter",
    url: "https://twitter.com/sirenasadventur",
    icon: BsTwitter,
  },
  {
    smName: "Whatsapp",
    url: "https://wa.me/50684810663",
    icon: BsWhatsapp,
  },
  {
    smName: "TripAdvisor",
    url: "https://www.tripadvisor.com/Attraction_Review-g309243-d788919-Reviews-Sirenas_Diving_Costa_Rica-Playas_del_Coco_Province_of_Guanacaste.html",
    icon: FaTripadvisor,
  },
];

const pages = [
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
];

const MEFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          {pages.map((page) => (
            <div key={page.main}>
              <Footer.Title title={page.main} />
              <Footer.LinkGroup col>
                {page.options.map((option) => (
                  <Footer.Link
                    key={option.id}
                    href={`${page.path}#${option.id}`}
                  >
                    {option.label}
                  </Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="https://www.maryelenius.com/"
            by="Mary Elenius 🤍"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {socialMedia.map((sm, index) => (
              <Footer.Icon key={index} href={sm.url} icon={sm.icon} />
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MEFooter;
