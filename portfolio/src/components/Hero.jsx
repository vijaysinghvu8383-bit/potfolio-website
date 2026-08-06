import profileImg from "../assets/vijay.png";

const Hero = () => {
  return (
    <section className="bg-[#1b1b2f] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="text-pink-400 font-semibold tracking-widest uppercase mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-pink-500">Vijay Singh</span>
          </h1>

          <h2 className="text-2xl lg:text-3xl text-gray-300 mt-6">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            I build modern, responsive and high-performance web applications
            using React, Node.js, Express, MongoDB and Tailwind CSS. I love
            creating beautiful UI and solving real-world problems.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
              Hire Me
            </button>

            <button className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-pink-500 blur-[120px] opacity-30 rounded-full"></div>

            {/* Image */}
            <img
              src={profileImg}
              alt="Vijay Singh"
              className="relative w-[420px] rounded-3xl object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;