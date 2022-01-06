import "./Nav.css";
import {FaLinkedin, FaEnvelope, FaInstagram, FaGithub} from "react-icons/fa";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Nav(props)
{
    const [style, setStyle] = useState("navHide");
    const [navIcon, setnavIcon] = useState(true);
    const changeStyle = () => {
        
        if (style == "navHide")
        {
            setnavIcon(false);
            setStyle("navShow");
        }
        else
        {
            setnavIcon(true);
            setStyle("navHide");
        }

      };
   return(
       <div className="Nav">
           <div className="logo">
           <li><Link to='/' className="link"> Shivang </Link></li>
           <li><Link to='/' className="link"> Kaul </Link></li>
           </div>
           <li><Link to='/' className="link"> Home </Link></li>
           <li><Link to='/about' className="link">About </Link></li>
           <li><Link to='/about' className="link">Work </Link></li>
           <li><Link to='/about' className="link">Projects </Link></li>
           <li><Link to='/about' className="link">Resume </Link></li>
           <li><Link to='/about' className="link">Services </Link></li>
           <li><Link to='/about' className="link">Blog </Link></li>
           <li><Link to='/about' className="link">Contact </Link></li>

           <div className="footer">
               <a style={{paddingLeft:"1.5rem"}} href="https://www.linkedin.com/in/shivangkaul/"><FaLinkedin/></a>
               <a href="https://www.instagram.com/shangkaul/"><FaInstagram/></a>
               <a href="mailto:shangkaul@gmail.com"><FaEnvelope/></a>
               <a href="https://github.com/shangkaul"><FaGithub/></a>

           </div>
           <div className="navBtn" onClick={changeStyle}>{navIcon ? <AiOutlineMenu/> : <AiOutlineClose /> }</div>
           <ul className={style}>
           <li><Link to='/' className="link"> Home </Link></li>
           <li><Link to='/about' className="link">About </Link></li>
           <li><Link to='/about' className="link">Work </Link></li>
           <li><Link to='/about' className="link">Projects </Link></li>
           <li><Link to='/about' className="link">Resume </Link></li>
           <li><Link to='/about' className="link">Services </Link></li>
           <li><Link to='/about' className="link">Blog </Link></li>
           <li><Link to='/about' className="link">Contact </Link></li>
           </ul>
       </div>
   )    
}