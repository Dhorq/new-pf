import graduationPhoto from "../assets/graduationphoto.jpg";
import ButtonBack from "../components/ButtonBack";

import "../tailwind.css";

const Home = () => {
  return (
    <>
      <div className="block bg-black md:hidden">
        <div className="flex flex-col justify-center items-center border bg-black border-white h-screen gap-5">
          <h2 className="text-white">Project</h2>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-5 bg-black">
          <div className="col-span-2 max-h-full">
            <img
              // className="w-full h-full rounded-xl transition-transform duration-500 hover:scale-110"
              className="max-h-screen w-full object-cover"
              src={graduationPhoto}
              alt="Photo"
            />
          </div>
          <div className="col-start-3 col-span-3 text-left h-screen border-black border-r p-20 ">
            <div className="flex flex-col justify-center items-center border bg-black border-white h-full gap-5 relative">
              <ButtonBack />
              <h2 className="text-white">Project</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
