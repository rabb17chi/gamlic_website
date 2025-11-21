"use client";

import React from "react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col w-full min-h-svh py-20" id="About">
      <p>{t("description")}</p>
      <div className="" id="">
        <h2></h2>
      </div>
      <div></div>
    </div>
  );
};

export default About;
