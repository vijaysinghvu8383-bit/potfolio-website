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
    <header className="bg-[#24243b] shadow-md">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#ff5e7d] tracking-wide">
          Vijay singh
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white text-sm font-semibold hover:text-pink-400 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Bottom Border */}
      <div className="h-[2px] bg-[#2f3048]"></div>
    </header>
  );
};

export default Navbar;