export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#151523] text-gray-400">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* ================= BRAND ================= */}

        <div>

          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            Vijay Singh
          </h2>

          <p className="text-sm leading-7 max-w-md">
            MERN Stack Developer building modern, responsive and
            high-performance web applications with React, Node.js,
            Express and MongoDB.
          </p>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <a
                href="#home"
                className="hover:text-pink-500 transition-colors"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-pink-500 transition-colors"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-pink-500 transition-colors"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="hover:text-pink-500 transition-colors"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-pink-500 transition-colors"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>


        {/* ================= SERVICES ================= */}

        <div>

          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors"
              >
                Web Development
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors"
              >
                UI/UX Design
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors"
              >
                API Integration
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors"
              >
                Database Design
              </a>
            </li>

          </ul>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-500">

        © {year} Vijay Singh. All rights reserved.

      </div>

    </footer>
  );
}