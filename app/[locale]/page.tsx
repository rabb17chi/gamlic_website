import About from "../components/About";
import BottomWebsiteArea from "../components/BottomWebsiteArea";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="h-svh snap-y snap-mandatory overflow-y-scroll css-scrollbar-hide">
      <div className="flex flex-col items-center justify-center min-h-svh w-full mx-auto font-sans bg-transparent transition-colors duration-500">
        <div className="w-full snap-start snap-always max-w-7xl ">
          <Intro />
        </div>
        <div className="w-full snap-start snap-always max-w-7xl ">
          <Products />
        </div>
        <div className="w-full snap-start snap-always max-w-7xl ">
          <About />
        </div>
        <div className="w-full snap-start snap-always max-w-7xl ">
          <Contact />
        </div>
        <div className="w-full snap-start snap-always">
          <BottomWebsiteArea />
        </div>
      </div>
    </div>
  );
}

