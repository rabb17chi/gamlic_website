import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div className="min-h-svh w-full py-20" id="Products">
      <div className="max-w-7xl w-full mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Games</h1>
        <p className="text-lg mb-8">Explore our collection of games</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="https://store.steampowered.com/app/3895050/Chronia_The_Rotcore/"
            className="border-red-500 border"
          >
            <div className="rounded-xl p-6">
              {/* <Image
                src="/"
                width={0}
                height={0}
                alt="Game Card"
                className="w-full border-yellow-300"
              /> */}
              <div className="w-full border-yellow-300 border h-20"></div>
              <p className="text-zinc-400">Chronia: The Rotcore</p>
              <h4 className="font-semibold">2D RPG</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
