import React from "react";
import ProgressBar from "./framer motion components/ProgressBar";
import "./App.css";
import ExitAndEnterAnimation from "./framer motion components/ExitAndEnterAnimation";

const App = () => {
  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-4xl text-center font-semibold">
        Framer motion components
      </h1>
      {/* Progress bars  
       <div className="flex justify-center gap-12 border-2 border-stone-500 p-4 ">
        <ProgressBar color="bg-yellow-500" duration="5" />
        <ProgressBar color="bg-sky-400" duration="7" />
        <ProgressBar color="bg-indigo-500" duration="9" />
      </div> */}

      {/* Exit and Enter Animations */}
      <ExitAndEnterAnimation />
    </div>
  );
};

export default App;
