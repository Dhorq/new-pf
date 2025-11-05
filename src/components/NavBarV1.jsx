import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [];

  const toggleNavBar = () => {
    setOpen(!open);
  };

  const closeNavBar = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className={"w-full h-[8ch] backdrop-blur-sm"}>
      <nav>
        <li>
          <Link to="/about">About</Link>
          <Link to="/contact">Socials</Link>
          <Link to="/project">Projects</Link>
          <button onClick={showNavBar}>
            <FaTimes />
          </button>
        </li>
      </nav>
      <button onClick={showNavBar}>
        <FaTimes />
      </button>
    </div>
  );
};

export default NavBar;
