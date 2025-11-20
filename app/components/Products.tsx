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
                <p className="text-zinc-400" id="game-name">
                  Chronia: The Rotcore
                </p>
                <p id="game-description" className="text-sm">
                  Our first game! You are a newbie mercenary, travelling across
                  the land to find your origin. Part with teams, slaying
                  monsters, achieving quests... It is your choice to shape your
                  own journey.
                </p>
              </div>
              <ul
                id="game-tags"
                className="flex flex-wrap gap-x-2 gap-y-2 my-2"
              >
                {["2d", "rpg"].map((tag, index) => (
                  <li
                    key={index}
                    className="rounded-2xl bg-dark/10 dark:bg-light/10 px-3 py-1 text-xs uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div id="game-links">
                <Link
                  href={STEAM_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
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
