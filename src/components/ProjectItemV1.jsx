import DFH from "../assets/DFH.png";
import PFV1 from "../assets/PFV1.png";
import TOURAVEL from "../assets/TOURAVEL.png";
import DOUBLEDEGREE from "../assets/DOUBLEDEGREE.png";

const ProjectItem = () => {
  return (
    <>
      <div className="text-white flex flex-col justify-start gap-5 w-[full] border border-white m-5">
        <div>
          <img className="object-cover" src={PFV1} alt="Dahlia Family House" />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <h3>Portfolio Website V1</h3>
          <p>Portfolio Website</p>
          <button className="h-[50px] bg-white text-black">Website</button>
        </div>
      </div>
      <div className="text-white flex flex-col justify-start gap-5 w-[full] border border-white m-5">
        <div>
          <img className="object-fill" src={DFH} alt="Dahlia Family House" />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <h3>Dahlia Family House</h3>
          <p>
            A responsive landing page for a villa, built with React and Vite.
            Includes information, gallery, testimonial, and contact link.
          </p>
          <button className="h-[50px] bg-white text-black">Website</button>
        </div>
      </div>
      <div className="text-white flex flex-col justify-start gap-5 w-[full] border border-white m-5">
        <div>
          <img
            className="object-fill"
            src={DOUBLEDEGREE}
            alt="Dahlia Family House"
          />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <h3>Double Degree</h3>
          <p>
            A website-based application developed for my thesis using only HTML5
            and CSS3, designed for desktop use without responsive design,
            focusing on system functionality rather than UI/UX.
          </p>
          <button className="h-[50px] bg-white text-black">Website</button>
        </div>
      </div>
      <div className="text-white flex flex-col justify-start gap-5 w-[full] border border-white m-5">
        <div>
          <img
            className="object-fill"
            src={TOURAVEL}
            alt="Dahlia Family House"
          />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <h3>Touravel</h3>
          <p>
            A website-based home landing page for a Travel Tour Website built
            using only HTML5 and CSS3, focusing on the user interface and clean
            layouts without frameworks or JavaScript, designed for desktop use
            only, with extensive HTML and CSS code written to strengthen
            front-end fundamentals and explore areas for scalability and future
            enhancements.
          </p>
          <button className="h-[50px] bg-white text-black">Website</button>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
