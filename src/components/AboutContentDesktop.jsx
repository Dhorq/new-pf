import NavBar from "./NavBar";
import { workData } from "../data/workData";
import { educationData } from "../data/educationData";

const AboutContentDesktop = () => {
  return (
    <>
      <div className="col-start-3 col-span-3 text-left h-screen border-black border-l p-20">
        <div className="flex flex-col justify-start items-center border text-white bg-black border-white h-full gap-5 overflow-y-auto overflow-x-hidden scrollbar-hide relative">
          <NavBar />
          <div className="text-center flex flex-col gap-5">
            <h1 className="text-4xl font-extrabold">About</h1>
            <div className="max-w-xl p-5 flex flex-col text-center gap-5 border-b-1">
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
          <div className="flex flex-col text-center gap-5 border-b-1 pb-5">
            <h2 className="text-4xl font-black">Educational Background</h2>
            {educationData.map((item) => (
              <div className="max-w-xl p-5 flex flex-col text-center gap-5">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <span className="italic">{item.role}</span>
                <ul className="list-disc list-outside max-w-xl flex flex-col gap-5 text-justify px-5 font-thin">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col text-center gap-5">
            <h2 className="text-4xl font-black">Work Experiences</h2>
            <div className="flex flex-col gap-8">
              {workData.map((item) => (
                <div
                  key={item.id}
                  className="max-w-xl p-5 flex flex-col text-center gap-5"
                >
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <span className="italic">{item.role}</span>
                  <ul className="list-disc list-outside flex flex-col gap-5 text-justify px-5 font-thin">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContentDesktop;
