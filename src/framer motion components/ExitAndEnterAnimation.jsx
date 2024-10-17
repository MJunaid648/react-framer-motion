import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ExitAndEnterAnimation = () => {
  const [removeInnerCircle, setRemoveInnerCircle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRemoveInnerCircle(true);
    }, 5000);
  });
  return (
    <div className="">
      <button
        className=" bg-yellow-400 rounded-sm px-2 py-1 text-black font-s"
        onClick={() => {
          setRemoveInnerCircle((prev) => !prev);
        }}
      >
        Toggle
      </button>
      <AnimatePresence>
        {!removeInnerCircle && (
          <motion.div
            initial={{ opacity: 1, x: -400, y: 300 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 3 }}
            exit={{ opacity: 0, x: 400, y: 300, scale: 1.5 }}
            className="h-32 w-32 bg-yellow-400 mx-auto rounded-full"
          >
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExitAndEnterAnimation;
