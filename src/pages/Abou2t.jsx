import "../tailwind.css";

const About = () => {
  return (
    <div className="flex justify-center items-center bg-blue-100">
      <div className="text-left h-screen border-black border-r p-25 w-60%">
        <div className="flex flex-col justify-start py-5 items-center border bg-white border-black h-full gap-5 animate-fadeIn overflow-y-auto custom-scroll">
          <div className="text-center flex flex-col gap-5">
            <h1 className="text-4xl font-black">About</h1>
            <p className="mb-4 max-w-xl text-justify">
              Recent graduate in Computer Science from Bina Nusantara University
              aspiring to build a career in software development. Possess a
              strong academic foundation in computer science, with exposure to
              system analysis, data, and software engineering. Driven by
              curiosity and a growth mindset, I am committed to mastering modern
              technologies, improving software quality, and delivering impactful
              solutions.
            </p>
          </div>
          <div className="flex flex-col text-center gap-5">
            <h2 className="text-4xl font-black">Educational Background</h2>
            <h3 className="text-2xl">Bina Nusantara University</h3>
            <span>
              Computer Science (Aiming at Data Analytics in 5th semester)
            </span>
            <ul className="max-w-xl flex flex-col gap-5 text-justify">
              <li>
                Participated in the BNCC (Bina Nusantara Computer Club)
                Challenge titled “Sharing Tech Expertise: UI/UX Design with
                Figma” to enhance skills in user interface and experience.
              </li>
              <li>
                Served as a Freshmen Leader for BINUSIAN 2026 from July to
                September 2022, guiding and supporting new students during their
                orientation and transition period.
              </li>
              <li>
                Served as a PAPB for the 67th and 68th BINUS graduation
                ceremonies, supporting event flow and ensuring smooth
                proceedings.
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-center gap-5 border bo">
            <h2 className="text-4xl font-black">Work Experiences</h2>
            <h3 className="text-2xl">
              Dewan Perwakilan Rakyat Republik Indonesia
            </h3>
            <span>
              Computer Science (Aiming at Data Analytics in 5th semester)
            </span>
            <ul className="max-w-xl flex flex-col gap-5 text-justify">
              <li>
                Participated in the BNCC (Bina Nusantara Computer Club)
                Challenge titled “Sharing Tech Expertise: UI/UX Design with
                Figma” to enhance skills in user interface and experience.
              </li>
              <li>
                Served as a Freshmen Leader for BINUSIAN 2026 from July to
                September 2022, guiding and supporting new students during their
                orientation and transition period.
              </li>
              <li>
                Served as a PAPB for the 67th and 68th BINUS graduation
                ceremonies, supporting event flow and ensuring smooth
                proceedings.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
