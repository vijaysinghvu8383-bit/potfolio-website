import portfolioImg from "../assets/portfolioImg.png";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
} from "react-icons/fa";

import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiVite,
} from "react-icons/si";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#17142D] text-white px-6 py-12 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="uppercase tracking-[5px] text-pink-500 text-sm font-semibold">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="text-pink-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Some of my recent work built using modern web technologies.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Portfolio Card */}

          <div className="bg-[#211B3A] rounded-3xl border border-pink-500/20 overflow-hidden hover:border-pink-500 transition duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,.3)]">

            <img
              src={portfolioImg}
              alt="Portfolio Preview"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Personal Portfolio
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-7">
                A responsive portfolio website built using React,
                Vite and Tailwind CSS with modern UI and smooth
                animations.
              </p>

              {/* Tech */}

              <div className="flex flex-wrap gap-2 mt-5">

                <div className="flex items-center gap-2 bg-[#2B2348] px-3 py-2 rounded-full">
                  <SiReact className="text-cyan-400" />
                  React
                </div>

                <div className="flex items-center gap-2 bg-[#2B2348] px-3 py-2 rounded-full">
                  <SiTailwindcss className="text-cyan-300" />
                  Tailwind
                </div>

                <div className="flex items-center gap-2 bg-[#2B2348] px-3 py-2 rounded-full">
                  <SiJavascript className="text-yellow-400" />
                  JavaScript
                </div>

                <div className="flex items-center gap-2 bg-[#2B2348] px-3 py-2 rounded-full">
                  <SiVite className="text-purple-400" />
                  Vite
                </div>

              </div>

              {/* Buttons */}

              <div className="flex gap-3 mt-6">

                <a
                  href="#"
                  className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href="#"
                  className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

          {/* Coming Soon */}

          <div className="bg-[#211B3A] rounded-3xl border border-pink-500/20 hover:border-pink-500 transition duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,.3)] flex flex-col justify-center items-center text-center p-8">

            <div className="w-20 h-20 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 text-4xl mb-6">
              <FaRocket />
            </div>

            <h3 className="text-3xl font-bold">
              More Projects
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              I'm currently building exciting MERN Stack projects.
              They'll be added here soon.
            </p>

            <span className="mt-6 border border-pink-500 px-5 py-2 rounded-full text-pink-400">
              🚀 Coming Soon
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}