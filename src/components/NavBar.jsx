import { IoLogoOctocat } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-black">
      <nav className="flex justify-between text-4xl text-white h-[50px] items-center px-5 w-full border-b py-7">
        <div>
          <Link to="#">
            <IoLogoOctocat />
          </Link>
        </div>
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </div>
  );
};

export default NavBar;
