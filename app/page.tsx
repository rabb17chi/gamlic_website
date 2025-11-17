import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-7xl w-full mx-auto font-sans bg-transparent transition-colors duration-500">
      <Intro />
      <Products />
      <About />
      <Contact />
    </div>
  );
}
