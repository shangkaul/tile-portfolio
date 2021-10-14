import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <SiIcons.SiAboutdotme />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <RiIcons.RiFileEditFill />,
    cName: "nav-text",
  },
  {
    title: "Work",
    path: "/work",
    icon: <FaIcons.FaBriefcase />,
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "/services",
    icon: <BsIcons.BsGearFill />,
    cName: "nav-text",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
    icon: <FaIcons.FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Clients",
    path: "/clients",
    icon: <MdIcons.MdPersonPin />,
    cName: "nav-text",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <AiIcons.AiFillMessage />,
    cName: "nav-text",
  },
];
