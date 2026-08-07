const Navbar = () => {
  const navLinks = [
    "Home",
    "Services",
    "About",
    "Skills",
    "Portfolio",
    "Blog",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#201C36]/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#ff5e7d] tracking-wide">
          Vijay Singh
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white text-sm font-semibold transition duration-300 hover:text-pink-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;