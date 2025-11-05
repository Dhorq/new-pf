import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <>
      <div className="text-center mb-20">
        <h1 className="text-2xl mb-5 sm:text-4xl sm:py-2 sm:mb-5 font-black overflow-hidden border-r-3 border-white whitespace-nowrap animate-typing uppercase">
          Ridho Rifqy Muhammad
        </h1>
        <p className="text-[0.5rem] italic text-red-500 se">
          {/* <span className="text-red-300">Future </span> */}
          Software Engineer
        </p>
      </div>
      <nav className="flex flex-col justify-center items-center gap-5">
        <Link
          className="uppercase text-sm relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full font-medium"
          to="/about"
        >
          About
        </Link>
        <Link
          className="uppercase text-sm relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full font-medium"
          to="/social"
        >
          Socials
        </Link>
        <Link
          className="uppercase text-sm relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full font-medium"
          to="/project"
        >
          Projects
        </Link>
        <a
          className="uppercase text-sm px-5 py-2 w-[150px] bg-white text-black font-bold text-center transition-transform duration-200 hover:scale-110"
          href=""
        >
          Contact Me
        </a>
        <a
          className="uppercase text-sm px-5 py-2 w-[150px] bg-white text-black font-bold text-center transition-transform duration-200 hover:scale-110"
          href=""
        >
          Download CV
        </a>
      </nav>
    </>
  );
};

export default HomeContent;
