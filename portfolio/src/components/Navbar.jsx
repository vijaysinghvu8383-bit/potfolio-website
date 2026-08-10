const Navbar = () => {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1d1d1d]/95 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold text-[#ff5e7d] tracking-wide"
        >
          Vijay Singh
        </a>

        {/* Navigation */}

        <nav>
          <ul className="flex items-center gap-10">

            {navLinks.map((item) => (

              <li key={item.id}>

                <a
                  href={`#${item.id}`}
                  className="
                    relative
                    text-white
                    text-sm
                    font-semibold
                    transition
                    duration-300
                    hover:text-pink-400

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-pink-500
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  {item.name}
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