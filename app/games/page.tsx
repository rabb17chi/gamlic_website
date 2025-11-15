export default function Games() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Games</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
          Explore our collection of games
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Game cards will go here */}
          <div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">2D RPG</h2>
            <p className="text-zinc-400">Your featured 2D RPG game</p>
          </div>
        </div>
      </div>
    </div>
  );
}

