import { socialData } from "./../data/socialData";
import NavBar from "./NavBar";

const SocialEach = () => {
  return (
    <div className="h-full flex flex-col justify-start items-center bg-black border border-white relative">
      <NavBar />
      <div className="flex justify-center flex-wrap m-3 ml-0 gap-3">
        {socialData.map((item, id) => {
          const Icon = item.icon;
          return (
            <a
              key={id}
              className={`inline-flex items-center justify-center font-semibold ${item.color} bg-rose-100 p-1 transition-transform duration-200 hover:scale-110`}
              href={item.url}
              target="_blank"
            >
              {Icon && <Icon className="text-gray-700 mr-1 rounded-xl" />}
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialEach;
