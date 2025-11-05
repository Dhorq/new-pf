import NavBar from "./NavBar";

const RightColumn = () => {
  return (
    <>
      <div className="col-start-3 col-span-3 text-left h-screen border-black border-l p-20">
        <div className="flex flex-col justify-start py-5 items-center border text-white bg-black border-white h-full gap-5 overflow-y-auto overflow-x-hidden custom-scroll relative">
          <NavBar />
          <div className="text-center flex flex-col gap-5">
            <h1 className="text-4xl font-black">About</h1>
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
          <div className="flex flex-col text-center gap-5">
            <h2 className="text-4xl font-black">Educational Background</h2>
            <div className="max-w-xl border border-white p-5 flex flex-col text-center gap-5">
              <h3 className="text-2xl">Bina Nusantara University</h3>
              <span className="italic">
                Computer Science (Aiming at Data Analytics in 5th semester)
              </span>
              <ul className="list-disc list-outside max-w-xl flex flex-col gap-5 text-justify px-5">
                <li>
                  Participated in the BNCC (Bina Nusantara Computer Club)
                  Challenge titled “Sharing Tech Expertise: UI/UX Design with
                  Figma” to enhance skills in user interface and experience.
                </li>
                <li>
                  Served as a Freshmen Leader for BINUSIAN 2026 from July to
                  September 2022, guiding and supporting new students during
                  their orientation and transition period.
                </li>
                <li>
                  Served as a PAPB for the 67th and 68th BINUS graduation
                  ceremonies, supporting event flow and ensuring smooth
                  proceedings.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col text-center gap-5">
            <h2 className="text-4xl font-black">Work Experiences</h2>
            <div className="max-w-xl border border-white p-5 flex flex-col text-center gap-5">
              <h3 className="text-2xl">
                Dewan Perwakilan Rakyat Republik Indonesia
              </h3>
              <span className="italic">Data Analyst (Internship)</span>
              <ul className="list-disc list-outside flex flex-col gap-5 text-justify px-5">
                <li>
                  Visualized data in Tableau Desktop that highlighted key
                  metrics and trends, improving reporting efficiency and
                  supporting strategic decision-making.
                </li>
                <li>
                  Developed a performance overview dashboard in Tableau Desktop
                  to effectively summarize an overview of performance metrics.
                </li>
                <li>
                  Collected, cleaned, and processed raw data using Python
                  libraries such as Pandas, Matplotlib, and Seaborn to ensure
                  accuracy and prepare datasets for meaningful analysis.
                </li>
                <li>
                  Analyzed complex datasets to uncover hidden patterns,
                  correlations, and actionable insights that drove data informed
                  business decisions.
                </li>
              </ul>
            </div>
            <div className="max-w-xl border border-white p-5 flex flex-col text-center gap-5">
              <h3 className="text-2xl">
                Lembaga National Single Window Kementerian Keuangan
              </h3>
              <span className="italic">Data Analyst (Internship)</span>
              <ul className="list-disc list-outside flex flex-col gap-5 text-justify px-5">
                <li>
                  Designed and developed a high-fidelity web-based ticketing
                  system mockup in Figma, enabling clear communication of UI/UX
                  concepts to develop.
                </li>
                <li>
                  Developed a responsive ticketing system website using HTML,
                  CSS, and JavaScript, integrating interactive features to
                  improve user engagement and experience.
                </li>
                <li>
                  Helped to develop a comprehensive flowchart system processes
                  to visualize application logic and streamline the development
                  workflow.
                </li>
                <li>
                  Helped to create and refine an Entity Relationship Diagram
                  (ERD) to ensure accurate data modeling and improve database
                  design efficiency.
                </li>
                <li>
                  Conducted UAT for the e-Phytosanitary system, validating data
                  exchange and message flows between various internal
                  integration modules and external service interfaces.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightColumn;
