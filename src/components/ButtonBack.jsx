import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <div
      className="absolute top-4 left-4 z-50 cursor-pointer bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded-md shadow-md transition"
      onClick={handleBack}
    >
      Back
    </div>
  );
};

export default Back;
