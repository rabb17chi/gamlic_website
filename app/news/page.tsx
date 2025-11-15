export default function News() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
        
        <div className="space-y-8">
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Stay updated with our latest game releases, development updates, and
            company news.
          </p>

          <div className="space-y-6">
            {/* News articles will go here */}
            <article className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
              <div className="text-sm text-zinc-400 mb-2">Coming Soon</div>
              <h2 className="text-2xl font-semibold mb-2">Latest Updates</h2>
              <p className="text-zinc-400">
                News articles and updates will appear here.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

