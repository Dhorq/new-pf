import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import graduationPhoto from "../assets/graduationphoto.jpg";
import "../tailwind.css";

const Home = () => {
  return (
    <>
      <div className="block bg-black md:hidden">
        <div className="flex flex-col justify-center items-center border bg-black border-white text-white gap-5 h-screen relative">
          <div className="text-center mb-20">
            <h1 className="text-2xl mb-5 sm:text-4xl sm:py-2 sm:mb-5 font-black overflow-hidden border-r-3 border-white whitespace-nowrap animate-typing">
              Ridho Rifqy Muhammad
            </h1>
            <p className="text-xs italic text-red-500 ">
              <span className="text-red-300">Future </span>
              Software Engineer
            </p>
          </div>
          <nav className="flex flex-col justify-center items-center gap-5">
            <Link
              className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              to="/about"
            >
              About
            </Link>
            <Link
              className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              to="/contact"
            >
              Socials
            </Link>
            <Link
              className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              to="/project"
            >
              Projects
            </Link>
            <a
              className="px-5 py-2 w-[150px] bg-white text-black font-bold text-center transition-transform duration-200 hover:scale-110"
              href=""
            >
              Contact Me
            </a>
            <a
              className="px-5 py-2 w-[150px] bg-white text-black font-bold text-center transition-transform duration-200 hover:scale-110"
              href=""
            >
              Download CV
            </a>
          </nav>
          <Footer />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-5 bg-black">
          <div className="hidden sm:block sm:col-span-2 sm:max-h-full">
            <img
              className="max-h-screen w-full object-cover"
              src={graduationPhoto}
              alt="Photo"
            />
          </div>
          <div className="col-start-1 sm:col-start-3 sm:col-span-3 text-left h-screen border-black border-r p-20 overflow-hidden">
            <div className="flex flex-col justify-center items-center border bg-black border-white text-white h-full gap-5 relative">
              <div className="text-center mb-20">
                <h1 className="text-sm sm:text-4xl sm:py-2 sm:mb-5 font-black overflow-hidden border-r-3 border-white whitespace-nowrap animate-typing">
                  Ridho Rifqy Muhammad
                </h1>
                <p className="text-xs italic text-red-500">
                  <span className="text-red-300">Future</span> Software Engineer
                </p>
              </div>
              <nav className="flex flex-col justify-center items-center gap-5 ">
                <Link
                  className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  to="/contact"
                >
                  Socials
                </Link>
                <Link
                  className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  to="/project"
                >
                  Projects
                </Link>
                <a
                  className="px-5 py-2 w-[150px] bg-green-500 text-black font-bold text-center rounded transition-transform duration-200 hover:scale-110"
                  href=""
                >
                  Contact Me
                </a>
                <a
                  className="px-5 py-2 w-[150px] bg-amber-300 text-black font-bold rounded transition-transform duration-200 hover:scale-110"
                  href=""
                >
                  Download CV
                </a>
              </nav>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
