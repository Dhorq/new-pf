import graduationPhoto from "../assets/graduationphoto.jpg";
import "../tailwind.css";
import ProjectItem from "../components/ProjectItem";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <div className="block bg-black md:hidden">
        <div className="flex flex-col justify-start items-center border bg-black border-white h-screen gap-5 relative text-white overflow-auto scrollbar-hide">
          <NavBar />
          <h2 className="font-black text-3xl">Projects & Trainings</h2>
          <ProjectItem />
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
          <div className="col-start-3 col-span-3 text-left h-screen border-black border-r p-20 ">
            <div className="flex flex-col justify-start items-center border bg-black border-white h-full gap-5 text-white relative overflow-auto overflow-x-hidden scrollbar-hide">
              <NavBar />
              <h2 className="font-black text-4xl">Projects & Trainings</h2>
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
