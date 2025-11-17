import React from "react";

const Intro = () => {
  return (
    <div
      className="min-h-svh w-full flex flex-col justify-center items-center"
      id="Intro"
    >
      <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light duration-500 transition-colors">
        Welcome to GAMLIC
      </h1>
      <p className="text-dark dark:text-light/70 duration-500 transition-colors">
        Game Development Studio
      </p>
    </div>
  );
};

export default Intro;
