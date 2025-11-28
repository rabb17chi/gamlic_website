"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const STEAM_STORE_URL =
  "https://store.steampowered.com/app/3895050/Chronia_The_Rotcore/";

export default function Products() {
  const t = useTranslations("products");

  return (
    <div className="min-h-svh w-full py-40 lg:flex " id="Products">
      <div
        className="max-w-7xl w-full m-auto lg:flex justify-center items-center flex-1"
        id="card-container"
      >
        <div className="w-full" id="game-info-card">
          <div className="lg:flex lg:gap-4">
            <div
              className="md:h-auto flex justify-center items-end md:items-center rounded-2xl overflow-hidden lg:w-3/5 lg:shrink-0"
              id="game-thumbnail-container"
            >
              <Image
                src="/assets/game/gamlic_rotcore_main.png"
                width={1000}
                height={0}
                alt="Game Card"
                className="w-full"
              />
            </div>
            <div
              className="mt-7 lg:mt-0 px-3 lg:flex flex-col lg:w-2/5 lg:shrink-0"
              id="game-info-container"
            >
              <div className="flex-1 flex flex-col " id="game-text-decs">
                <h2
                  className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold mb-1 lg:mb-0"
                  id="game-name"
                >
                  {t("gameName")}
                </h2>
                <p
                  id="game-description"
                  className="text-lg leading-tight flex-1 flex justify-center items-center"
                >
                  {t("gameDescription")}
                </p>

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
              </div>
              <div
                id="game-links"
                className="border text-center py-5 rounded-2xl hover:bg-green-300 transition-all duration-500 hover:cursor-pointer hover:text-black"
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
