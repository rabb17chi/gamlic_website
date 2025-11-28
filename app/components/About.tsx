"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("about");

  return (
    <div
      className="flex flex-col w-full min-h-svh py-20 px-4 lg:px-8"
      id="About"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Description */}
        <div className="mb-12 text-center">
          <p className="text-lg md:text-xl leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Studio Name & Tagline */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-3">
            {t("studioName")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 italic">
            {t("tagline")}
          </p>
        </div>

        {/* Contact Information */}
        <div className="border-t border-b border-dark/20 dark:border-light/20 py-8">
          <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-6 md:gap-12">
            {/* Email */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {t("emailLabel")}
              </p>
              <Link
                href={`mailto:${t("email")}`}
                className="text-lg font-medium hover:underline transition-all"
              >
                {t("email")}
              </Link>
            </div>

            {/* Instagram */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {t("instagramLabel")}
              </p>
              <Link
                href={t("instagramUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:underline transition-all"
              >
                {t("instagramHandle")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
