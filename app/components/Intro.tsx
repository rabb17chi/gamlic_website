import React from "react";

const Intro = () => {
  return (
    <div
      className="min-h-svh w-full flex flex-col justify-center items-center py-20 px-4 md:px-0"
      id="Intro"
    >
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold duration-500 transition-colors">
          Welcome to GAMLIC
        </h1>
        <p className="opacity-70 duration-500 transition-colors">
          Game Development Studio
        </p>
      </div>
    </div>
  );
};

export default Intro;
