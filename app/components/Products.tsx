"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const STEAM_STORE_URL =
  "https://store.steampowered.com/app/3895050/Chronia_The_Rotcore/";

export default function Products() {
  const t = useTranslations("products");

  return (
    <div className="min-h-svh w-full py-20" id="Products">
      <div
        className="max-w-7xl w-full min-h-[90vh] m-auto py-40 lg:flex justify-center items-center"
        id="card-container"
      >
        <div className="w-full" id="game-info-card">
          <div className="lg:flex">
            <div
              className="md:h-auto flex justify-center items-end md:items-center rounded-2xl overflow-hidden"
              id="game-thumbnail-container"
            >
              <Image
                src="/assets/game_thumbnail.jpg"
                width={500}
                height={0}
                alt="Game Card"
                className="w-100 md:w-200 lg:w-550"
              />
            </div>
            <div
              className="mt-5 lg:mt-0 px-3 lg:flex flex-col h-full"
              id="game-info-container"
            >
              <div className="flex-1" id="game-text-decs">
                <h2
                  className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold mb-1 lg:mb-3"
                  id="game-name"
                >
                  {t("gameName")}
                </h2>
                <p id="game-description" className="text-sm leading-tight">
                  {t("gameDescription")}
                </p>
              </div>
              <ul id="game-tags" className="flex flex-wrap gap-x-2 my-3">
                {["2d", "rpg"].map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-2xl bg-dark/10 dark:bg-light/10 px-3 py-1 text-xs uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div
                id="game-links"
                className="border text-center p-5 my-2 rounded-2xl hover:bg-green-300 transition-all duration-500 hover:cursor-pointer hover:text-black"
              >
                <Link
                  href={STEAM_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-full uppercase"
                >
                  {t("steam")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
