import DFH from "../assets/DFH.png";
import PFV1 from "../assets/PFV1.png";

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
          <p>Landing page for villa</p>
          <button className="h-[50px] bg-white text-black">Website</button>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
