import projectData from "../data/ProjectData.js";

const ProjectItem = () => {
  return (
    <>
      {projectData.map((item) => (
        <div
          key={item.id}
          className="text-white flex flex-col justify-start gap-5 w-[full] border border-white m-5"
        >
          <div>
            <img className="object-cover" src={item.image} alt={item.alt} />
          </div>
          <div className="flex flex-col gap-5 p-5">
            <h3 className="font-bold text-3xl">{item.title}</h3>
            <p>{item.description}</p>
            <a
              className="h-[50px] text-center flex justify-center items-center bg-white text-black font-bold cursor-pointer"
              href={item.link}
              {...(item.hasLink
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.buttonText}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
