import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const Back = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <div
      className="absolute w-[50px] h-[30px] top-4 left-4 z-50 cursor-pointer bg-white hover:bg-gray-300 text-black text-center flex justify-center items-center px-3 py-1 rounded-md shadow-md transition"
      onClick={handleBack}
    >
      <IoChevronBackCircleOutline />
    </div>
  );
};

export default Back;
