import React from "react";
import graduationPhoto from "./assets/graduationphoto.jpg";
import { SiCodewars, SiHackerrank } from "react-icons/si";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import "./tailwind.css";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-8 p-6 bg-blue-100 md:h-screen lg:gap-50">
      <div className="text-left">
        <h1 className="font-black text-4xl mb-4">Ridho Rifqy Muhammad</h1>
        <p className="mb-4 italic max-w-xl">
          Recent graduate in Computer Science from Bina Nusantara University
          aspiring to build a career in software development. Possess a strong
          academic foundation in computer science, with exposure to system
          analysis, data, and software engineering. Driven by curiosity and a
          growth mindset, I am committed to mastering modern technologies,
          improving software quality, and delivering impactful solutions.
        </p>
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
      <div className="md:w-sm">
        <img
          className="w-full h-full rounded-xl transition-transform duration-500 hover:scale-110"
          src={graduationPhoto}
          alt="Photo"
        />
      </div>
    </div>
  );
};

export default Home;
