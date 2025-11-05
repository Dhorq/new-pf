import { SiCodewars, SiHackerrank } from "react-icons/si";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import ButtonBack from "../components/ButtonBack";
import graduationPhoto from "../assets/graduationphoto.jpg";
import "../tailwind.css";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <>
      <div className="block bg-black md:hidden">
        <NavBar />
        <div className="flex flex-col justify-center items-center border bg-black border-white h-screen gap-5">
          <div className="flex flex-wrap m-3 ml-0 gap-3">
            <a
              className="inline-flex items-center justify-center font-semibold text-purple-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
              href="https://github.com/Dhorq"
              target="_blank"
            >
              <FaGithub className="text-gray-700 rounded-xl mr-1" />
              Github
            </a>
            <a
              className="inline-flex items-center justify-center font-semibold text-purple-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
              href="https://www.codewars.com/users/Dhorq"
              target="_blank"
            >
              <SiCodewars className="text-gray-700 rounded-xl mr-1" />
              Codewars
            </a>
            <a
              className="inline-flex items-center justify-center font-semibold text-purple-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
              href="https://www.hackerrank.com/profile/ridhorifqy34"
              target="_blank"
            >
              <SiHackerrank className="text-gray-700 rounded-xl mr-1" />
              HackerRank
            </a>
          </div>
          <div className="flex flex-wrap m-3 ml-0 gap-3">
            <a
              className="inline-flex items-center justify-center font-semibold text-blue-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
              href="https://www.linkedin.com/in/ridhorifqymuhammad/"
              target="_blank"
            >
              <FaLinkedin className="text-gray-700 rounded-xl mr-1" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center justify-center font-semibold text-blue-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
              href="https://www.instagram.com/ridhorifqyy"
              target="_blank"
            >
              <FaInstagramSquare className="text-gray-700 rounded-xl mr-1" />
              Instagram
            </a>
          </div>
          <div className="flex flex-wrap m-3 ml-0 gap-3">
            <a
              className="inline-flex items-center justify-center font-semibold text-red-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
              href="https://portfolio-ridho-six.vercel.app/"
              target="_blank"
            >
              Other Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-5 bg-black">
          <div className="col-span-2 max-h-full">
            <img
              className="max-h-screen w-full object-cover"
              src={graduationPhoto}
              alt="Photo"
            />
          </div>
          <div className="col-start-3 col-span-3 text-left h-screen border-black border-r p-20">
            <div className="flex flex-col justify-center items-center border bg-black border-white h-full gap-5 relative">
              <ButtonBack />

              <div className="flex flex-wrap m-3 ml-0 gap-3">
                <a
                  className="inline-flex items-center justify-center font-semibold text-purple-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
                  href="https://github.com/Dhorq"
                  target="_blank"
                >
                  <FaGithub className="text-gray-700 rounded-xl mr-1" />
                  Github
                </a>
                <a
                  className="inline-flex items-center justify-center font-semibold text-purple-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
                  href="https://www.codewars.com/users/Dhorq"
                  target="_blank"
                >
                  <SiCodewars className="text-gray-700 rounded-xl mr-1" />
                  Codewars
                </a>
                <a
                  className="inline-flex items-center justify-center font-semibold text-purple-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
                  href="https://www.hackerrank.com/profile/ridhorifqy34"
                  target="_blank"
                >
                  <SiHackerrank className="text-gray-700 rounded-xl mr-1" />
                  HackerRank
                </a>
              </div>
              <div className="flex flex-wrap m-3 ml-0 gap-3">
                <a
                  className="inline-flex items-center justify-center font-semibold text-blue-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
                  href="https://www.linkedin.com/in/ridhorifqymuhammad/"
                  target="_blank"
                >
                  <FaLinkedin className="text-gray-700 rounded-xl mr-1" />
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center justify-center font-semibold text-blue-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
                  href="https://www.instagram.com/ridhorifqyy"
                  target="_blank"
                >
                  <FaInstagramSquare className="text-gray-700 rounded-xl mr-1" />
                  Instagram
                </a>
              </div>
              <div className="flex flex-wrap m-3 ml-0 gap-3">
                <a
                  className="inline-flex items-center justify-center font-semibold text-red-500 bg-rose-100 rounded p-1 transition-transform duration-200 hover:scale-110"
                  href="https://portfolio-ridho-six.vercel.app/"
                  target="_blank"
                >
                  Other Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
