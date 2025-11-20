import Image from "next/image";
import Link from "next/link";

const STEAM_STORE_URL =
  "https://store.steampowered.com/app/3895050/Chronia_The_Rotcore/";

export default function Products() {
  return (
    <div className="min-h-svh w-full py-20" id="Products">
      <div
        className="max-w-7xl w-full h-full mx-auto py-4 flex justify-center items-center"
        id="card-container"
      >
        <div className="w-full" id="game-info-card">
          <div className="lg:flex items-center">
            <div
              className="h-80 md:h-100 flex justify-center items-end md:items-center py-2"
              id="game-thumbnail-container"
            >
              <Image
                src="/assets/game_thumbnail.jpg"
                width={400}
                height={250}
                alt="Game Card"
                className="w-100 lg:w-800 object-contain"
              />
            </div>
            <div id="game-info" className="px-6">
              <div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-linear-to-r from-dark dark:from-light to-gray-600 dark:to-gray-400 bg-clip-text text-transparent"
                  id="game-name"
                >
                  Chronia: The Rotcore
                </h2>
                <p id="game-description" className="text-sm leading-tight">
                  A turn-based RPG set in the fantasy land of Tinotella. Play as
                  a mercenary traveling across war-torn kingdoms to discover
                  your origin. Customize your character, engage in tactical
                  combat, and shape your own journey.
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
                className="border text-center p-5 my-2 rounded-3xl"
              >
                <Link
                  href={STEAM_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline w-full uppercase"
                >
                  Steam
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
