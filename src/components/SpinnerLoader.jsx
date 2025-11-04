import { useEffect, useState } from "react";

const SpinnerLoader = () => {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImg(false);
      setText("Wait for 3 seconds to be loaded, did you see the spinner?");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {showImg ? (
        <img
          src="./infinite-spinner.svg"
          alt="Loading Spinner"
          className="w-20 h-20"
        />
      ) : (
        <h3 className="text-lg font-semibold text-gray-700">{text}</h3>
      )}
    </div>
  );
};

export default SpinnerLoader;
