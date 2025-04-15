import { Terminal } from "lucide-react"; // You can use other icons like "Activity", "Code", etc.

const Logo = () => (
  <a
    href="#home"
    className="flex items-center gap-2 font-bold text-xl cursor-pointer group"
  >
    <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
      &lt;CodeCraft.Dev /&gt;
    </span>
  </a>
);

export default Logo;
