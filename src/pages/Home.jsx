import Footer from "../components/Footer";
import graduationPhoto from "../assets/graduationphoto.jpg";
import "../tailwind.css";
import HomeContent from "../components/HomeContent";

const Home = () => {
  return (
    <>
      <div className="block bg-black md:hidden">
        <div className="flex flex-col justify-center items-center bg-black text-white gap-5 h-screen relative">
          <HomeContent />
          <Footer />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-5 bg-black">
          <div className="hidden sm:block sm:col-span-2 sm:max-h-full">
            <img
              className="max-h-screen w-full object-cover"
              src={graduationPhoto}
              alt="Photo"
            />
          </div>
          <div className="col-start-1 sm:col-start-3 sm:col-span-3 text-left h-screen border-black border-r p-20 overflow-hidden">
            <div className="flex flex-col justify-center items-center border bg-black border-white text-white h-full gap-5 relative">
              <HomeContent />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
