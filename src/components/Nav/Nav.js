import "./Nav.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavbarData } from "./NavData";
import { IconContext } from "react-icons";

export default function Nav(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  let barStyle = { color: "black", fontSize: "2rem" };
  let closeStyle = { color: "white", fontSize: "2rem" };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="Nav">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} style={barStyle} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-close">
                <AiIcons.AiOutlineClose style={closeStyle} />
              </Link>
            </li>
            <li className="nav-name">
              <Link to="/">John Doe</Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="footer">
            <a style={{ paddingLeft: "1.5rem" }} href="/">
              <FaIcons.FaLinkedin />
            </a>
            <a href="/">
              <FaIcons.FaInstagram />
            </a>
            <a href="/">
              <FaIcons.FaTwitter />
            </a>
            <a href="/">
              <FaIcons.FaGithub />
            </a>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
