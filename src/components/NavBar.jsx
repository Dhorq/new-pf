import { IoLogoOctocat } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between text-4xl bg-black text-white h-[50px] items-center px-5 w-screen border-b py-7">
        {/* Logo Section? */}
        <div>
          <Link to="/">
            <IoLogoOctocat />
          </Link>
        </div>
        {/* Search Section */}
        {/* Menu Section */}
        {/* Icons Section  */}
        {/* Mobile Hamburger Menu Section */}
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </div>
      </nav>

      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default NavBar;
