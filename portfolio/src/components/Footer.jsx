export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#191325] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            <span className="text-pink-500">Vijay</span> Singh
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-sm">
            MERN Stack Developer building modern, responsive and high-performance
            web applications with React, Node.js, Express and MongoDB.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                API Integration
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Database Design
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-500">
        © {year} Vijay Singh. All rights reserved.
      </div>
    </footer>
  );
}