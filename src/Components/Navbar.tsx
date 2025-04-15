import { useEffect } from "react";
import Logo from "./Logo";
// Define the prop types
interface menuOpenProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({ menuOpen, setMenuOpen }: menuOpenProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-gradient-to-r from-purple-500 to-blue-1200 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:rotate-x-2 hover:rotate-y-2"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:rotate-x-2 hover:rotate-y-2"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:rotate-x-2 hover:rotate-y-2"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white  transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:rotate-x-2 hover:rotate-y-2"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
