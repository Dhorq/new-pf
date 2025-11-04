import graduationPhoto from "../assets/graduationphoto.jpg";
import ButtonBack from "../components/ButtonBack";
import RightColumn from "../components/RightColumn";
import "../tailwind.css";

const About = () => {
  return (
    <>
      {/* MOBILE*/}
      <div className="block bg-black md:hidden">
        <div className="flex flex-col justify-start py-5 items-center border border-white text-white bg-black h-full gap-5 overflow-y-auto custom-scroll">
          <div className="w-[80vw] border-b-1 pb-10">
            <img
              className="rounded-full object-cover"
              src={graduationPhoto}
              alt="Photo"
            />
          </div>
          <ButtonBack />
          <div className="text-center flex flex-col gap-5 ">
            <h1 className="text-4xl font-black">About</h1>
            <div className="w-[80vw] p-5 flex flex-col text-center gap-5 border-b-1 pb-10">
              <p className="mb-4 max-w-xl text-justify">
                Recent graduate in Computer Science from Bina Nusantara
                University aspiring to build a career in software development.
                Possess a strong academic foundation in computer science, with
                exposure to system analysis, data, and software engineering.
                Driven by curiosity and a growth mindset, I am committed to
                mastering modern technologies, improving software quality, and
                delivering impactful solutions.
              </p>
            </div>
          </div>
          <div className="w-[80vw] flex flex-col text-center gap-5 border-b-1">
            <h2 className="text-4xl font-black">Education</h2>
            <div className="p-5 flex flex-col text-center gap-5 border border-white m-10">
              <h3 className="text-2xl">Bina Nusantara University</h3>
              <span>
                Computer Science (Aiming at Data Analytics in 5th semester)
              </span>
            </div>
          </div>
          <div className="w-[80vw] flex flex-col text-center gap-5">
            <h2 className="text-4xl font-black">Work Experiences</h2>
            <div className="max-w-xl p-5 flex flex-col text-center gap-5 border border-white m-10">
              <h3 className="text-2xl">
                Dewan Perwakilan Rakyat Republik Indonesia
              </h3>
              <span className="italic">Data Analyst (Internship)</span>
            </div>
            <div className="max-w-xl p-5 flex flex-col text-center gap-5 border border-white m-10">
              <h3 className="text-2xl">
                Lembaga National Single Window Kementerian Keuangan
              </h3>
              <span className="italic">System Analyst (Internship)</span>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP*/}
      <div className="hidden md:block">
        <div className="grid grid-cols-5 bg-black">
          <div className="col-span-2 max-h-full">
            <img
              className="max-h-screen w-full object-cover"
              src={graduationPhoto}
              alt="Photo"
            />
          </div>
          <RightColumn />
        </div>
      </div>
    </>
  );
};

export default About;
