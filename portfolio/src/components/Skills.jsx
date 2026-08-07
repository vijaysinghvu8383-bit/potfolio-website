import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFramer,
  SiPostman,
  SiMysql,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-500" />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-pink-500" />,
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-white" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
      {
        name: "REST API",
        icon: "⚡",
      },
      {
        name: "JWT",
        icon: "🔐",
      },
      {
        name: "Socket.io",
        icon: "🔌",
      },
    ],
  },

  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-500" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-400" />,
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-blue-500" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500" />,
      },
      {
        name: "Figma",
        icon: <FaFigma className="text-pink-500" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
      },
    ],
  },
];

export default function Skills() {

      return (
    <section
      id="skills"
      className="min-h-screen bg-[#161329] text-white px-6 py-10 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}

        <div className="text-center mb-8">

          <p className="uppercase tracking-[4px] text-pink-500 font-semibold text-sm">
            MY EXPERTISE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technical{" "}
            <span className="text-pink-500">
              Skills
            </span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm leading-6">
            I build modern, responsive and scalable web applications
            using the latest frontend and backend technologies.
          </p>

        </div>

        {/* Skill Cards */}

        <div className="grid lg:grid-cols-2 gap-5">

          {skills.map((category) => (

            <div
              key={category.title}
              className="rounded-2xl
              border
              border-pink-500/20
              bg-[#1C1833]
              p-5
              hover:border-pink-500
              hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]
              transition-all
              duration-300"
            >

              <h3 className="text-xl font-bold mb-5 text-pink-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((skill) => (

                  <div
                    key={skill.name}
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-3
                    py-2
                    bg-[#272241]
                    border
                    border-pink-500/20
                    hover:bg-pink-500
                    hover:text-white
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-pointer"
                  >

                    <span className="text-lg">
                      {skill.icon}
                    </span>

                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}