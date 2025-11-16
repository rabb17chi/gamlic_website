export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        
        <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
          <p className="text-lg leading-relaxed">
            Welcome to GAMLIC, a passionate game development studio dedicated to
            creating immersive and engaging gaming experiences.
          </p>
          
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              We strive to push the boundaries of game design and storytelling,
              creating memorable experiences that resonate with players worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              What We Do
            </h2>
            <p className="leading-relaxed">
              From 2D RPGs to innovative game mechanics, we craft games that blend
              compelling narratives with engaging gameplay.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

