import graduationPhoto from "../assets/graduationphoto.jpg";
import SocialEach from "../components/SocialEach";
import "../tailwind.css";

const Social = () => {
  return (
    <>
      <div className="block bg-black md:hidden">
        <SocialEach />
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
          <div className="col-start-3 col-span-3 text-left h-screen p-20">
            <SocialEach />
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
