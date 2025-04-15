import "./App.css";
import Navbar from "./Components/Navbar";
import LoadingScreen from "./Components/LoadingScreen";
import { useAppContext } from "./Components/AppContext";
import { About } from "./Components/Sections/About";
import Home from "./Components/Sections/Home";
import { Projects } from "./Components/Sections/Projects";
import { Contact } from "./Components/Sections/Contact";
import MobileMenu from "./Components/MobileMenu";
function App() {
  const { isLoaded, setIsLoaded, menuOpen, setMenuOpen } = useAppContext();

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } animate-gradient text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MobileMenu>
        <Home></Home>
        <Projects></Projects>
        <About />
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
