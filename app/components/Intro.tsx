"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Intro = () => {
  const t = useTranslations("intro");

  return (
    <div
      className="min-h-svh w-full flex flex-col justify-center items-center py-20 px-4 md:px-0"
      id="Intro"
    >
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold duration-500 transition-colors">
          {t("title")}
        </h1>
        <p className="text-dark/50 dark:text-light/20">
          Where{" "}
          <span className="font-bold text-2xl text-dark dark:text-light">
            {t("game")}
          </span>
          {t("e")} meets {t("repub")}
          <span className="font-bold text-2xl text-dark dark:text-light">
            {t("lic")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
