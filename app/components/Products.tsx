import Image from "next/image";
import Link from "next/link";

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
              <div id="game-tags">2d,rpg</div>
              <div id="game-links">steam</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
