"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";

const STEAM_STORE_URL =
  "https://store.steampowered.com/app/3895050/Chronia_The_Rotcore/";

export default function Products() {
  const t = useTranslations("products");
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovering) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering]);

  return (
    <div className="min-h-svh w-full py-40 lg:flex " id="Products">
      <div
        className="max-w-7xl w-full m-auto lg:flex justify-center items-center flex-1"
        id="card-container"
      >
        <div className="w-full" id="game-info-card">
          <div className="lg:flex lg:gap-4">
            <div
              className="md:h-auto flex justify-center items-end md:items-center rounded-2xl overflow-hidden lg:w-3/5 lg:shrink-0 relative group"
              id="game-thumbnail-container"
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  setIsHovering(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) {
                  setIsHovering(false);
                }
              }}
            >
              {/* Image - always rendered */}
              <Image
                src="/assets/game/gamlic_rotcore_main.png"
                width={1000}
                height={0}
                alt="Game Card"
                className={`w-full transition-opacity duration-300 ${
                  isHovering ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Video - always rendered, positioned absolutely */}
              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isHovering ? "opacity-100" : "opacity-0"
                }`}
                muted
                loop
                playsInline
                src="/assets/game/rotcore_trailer.mp4"
              />
              {/* Play button overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300 ${
                  isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsTrailerOpen(true)}
              >
                <div className="bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
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
              <button
                onClick={() => setIsTrailerOpen(true)}
                className="md:hidden w-full border text-center py-5 rounded-2xl hover:bg-blue-300 transition-all duration-500 hover:cursor-pointer hover:text-black mb-2"
              >
                <span className="text-lg w-full uppercase">Watch Trailer</span>
              </button>
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

      {/* Video Trailer Modal */}
      {isTrailerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsTrailerOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsTrailerOpen(false)}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              aria-label="Close trailer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              className="w-full h-auto"
              controls
              autoPlay
              src="/assets/game/rotcore_trailer.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
