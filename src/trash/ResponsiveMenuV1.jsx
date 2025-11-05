import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="menu"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full h-full bg-black top-14 border border-white"
        >
          <div className="text-xl font-semibold uppercase bg-black text-white h-full w-full flex justify-center">
            <ul className="flex flex-col justify-center items-center gap-10 pb-20">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/social">Social</Link>
              <Link to="/project">Project</Link>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
