import "./App.css";
import Navbar from "./Components/Navbar";
import { useAppContext } from "./Components/AppContext";
import { About } from "./Components/Sections/About";
import Home from "./Components/Sections/Home";
import { Projects } from "./Components/Sections/Projects";
import { Contact } from "./Components/Sections/Contact";
import MobileMenu from "./Components/MobileMenu";
function App() {
  const { menuOpen, setMenuOpen } = useAppContext();

  return (
    <>
      <div className="min-h-screen transition-opacity duration-700 opacity-100 animate-gradient text-gray-100">
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
