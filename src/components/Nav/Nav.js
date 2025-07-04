import "./Nav.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`Nav ${isOpen ? 'nav-open' : ''}`}>
      <div className="logo">
        <li><Link to='/' className="link">Shivang</Link></li>
        <li><Link to='/' className="link">Kaul</Link></li>
      </div>
      
      <div className="nav-items">
        <li><Link to='/' className="link" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to='/about' className="link" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to='/projects' className="link" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to='/work' className="link" onClick={() => setIsOpen(false)}>Experience</Link></li>
        <li><Link to='/skills' className="link" onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to='/gallery' className="link" onClick={() => setIsOpen(false)}>Gallery</Link></li>
        <li><Link to='/blog' className="link" onClick={() => setIsOpen(false)}>Blog</Link></li>
        <li><Link to='/achievements' className="link" onClick={() => setIsOpen(false)}>Achievements</Link></li>
        <li><Link to='/contact' className="link" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </div>

      <div className="footer">
        <a href="https://linkedin.com/in/shivangkaul" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/shivangkaul" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/shivangkaul" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:shivang@shangkaul.in">
          <FaEnvelope />
        </a>
      </div>
      
      <div className="navBtn" onClick={toggleNav}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
}