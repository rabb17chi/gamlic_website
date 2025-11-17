import About from "./components/About";
import BottomWebsiteArea from "./components/Bottom_website_area";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="h-svh snap-y snap-mandatory overflow-y-scroll">
      <div className="flex flex-col items-center justify-center min-h-svh max-w-7xl w-full mx-auto font-sans bg-transparent transition-colors duration-500">
        <div className="w-full snap-start snap-always">
          <Intro />
        </div>
        <div className="w-full snap-start snap-always">
          <Products />
        </div>
        <div className="w-full snap-start snap-always">
          <About />
        </div>
        <div className="w-full snap-start snap-always">
          <Contact />
        </div>
        <div className="w-full snap-start snap-always">
          <BottomWebsiteArea />
        </div>
      </div>
    </div>
  );
}
