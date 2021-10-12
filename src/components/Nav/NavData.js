import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

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
    icon: <GrIcons.GrProjects />,
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
    icon: <GrIcons.GrServices />,
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
