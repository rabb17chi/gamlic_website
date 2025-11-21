import React from "react";

const Intro = () => {
  return (
    <div
      className="min-h-svh w-full flex flex-col justify-center items-center py-20 px-4 md:px-0"
      id="Intro"
    >
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold duration-500 transition-colors">
          GAMLIC
        </h1>
        <p className="text-dark/50 dark:text-light/20">
          Where{" "}
          <span className="font-bold text-2xl text-dark dark:text-light">
            GAM
          </span>
          E meets REPUB
          <span className="font-bold text-2xl text-dark dark:text-light">
            LIC
          </span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
