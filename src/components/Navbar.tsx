import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 w-full shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Technologies</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>

        {/* Auth buttons */}

        <div className="flex gap-3 items-center">
          <button className="text-gray-700 font-medium hover:text-brand-pink transition">
            Sign In
          </button>
          <button className="text-white bg-brand-pink rounded-2xl px-5 py-2 font-medium shadow-sm hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
