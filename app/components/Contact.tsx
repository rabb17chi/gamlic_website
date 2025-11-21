"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <div className="min-h-svh w-full flex flex-col py-20" id="Contact">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("getInTouch")}</h2>
            <p className="mb-6">{t("description")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
