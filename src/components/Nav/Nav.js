import "./Nav.css";
import {FaLinkedin, FaTwitter, FaInstagram, FaGithub} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Nav(props)
{
   return(
       <div className="Nav">
           <div className="logo">
           <li><Link to='/' className="link"> John </Link></li>
           <li><Link to='/' className="link"> Doe </Link></li>
           </div>
           <li><Link to='/' className="link"> Home </Link></li>
           <li><Link to='/about' className="link">About </Link></li>
           <li><Link to='/about' className="link">Projects </Link></li>
           <li><Link to='/about' className="link">Work </Link></li>
           <li><Link to='/about' className="link">Services </Link></li>
           <li><Link to='/about' className="link">Testimonials </Link></li>
           <li><Link to='/about' className="link">Clients </Link></li>
           <li><Link to='/about' className="link">Contact </Link></li>

           <div className="footer">
               <a style={{paddingLeft:"1.5rem"}} href="/"><FaLinkedin/></a>
               <a href="/"><FaInstagram/></a>
               <a href="/"><FaTwitter/></a>
               <a href="/"><FaGithub/></a>

           </div>
           <div className="navBtn"><AiOutlineMenu/></div>
       </div>
   )    
}