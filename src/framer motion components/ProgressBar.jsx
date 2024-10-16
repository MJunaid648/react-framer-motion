import { motion } from "framer-motion";

const ProgressBar = ({ color, duration }) => {
  return (
    <div className="w-4 h-80 rounded-3xl bg-white flex flex-col-reverse">
      <motion.div
        animate={{ height: "100%" }}
        transition={{ duration }}
        className={`h-0 w-full ${color} rounded-3xl`}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
