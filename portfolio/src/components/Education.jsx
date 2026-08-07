import {
  FaGraduationCap,
  FaCode,
  FaReact,
  FaRocket,
} from "react-icons/fa";

const journey = [
  {
    year: "2023",
    icon: <FaGraduationCap />,
    title: "Started BCA (AI & ML)",
    subtitle: "Galgotias University",
    description: "Started my programming and AI learning journey.",
  },

  {
    year: "2024",
    icon: <FaCode />,
    title: "Frontend Development",
    subtitle: "HTML • CSS • JavaScript",
    description: "Learned core frontend technologies and built UI projects.",
  },

  {
    year: "2025",
    icon: <FaReact />,
    title: "MERN Stack",
    subtitle: "React • Node • Express • MongoDB",
    description: "Building full-stack applications using modern technologies.",
  },

  {
    year: "2026",
    icon: <FaRocket />,
    title: "Career Preparation",
    subtitle: "Projects • DSA • Interviews",
    description: "Preparing for Full Stack Developer opportunities.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#161329] text-white py-10 px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="text-center mb-8">

          <p className="uppercase tracking-[4px] text-pink-500 text-sm font-semibold">
            MY JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Education &
            <span className="text-pink-500">
              {" "}Learning Journey
            </span>
          </h2>

          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            My learning path from university to becoming a Full Stack Developer.
          </p>

        </div>
                {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-[2px] bg-pink-500/30"></div>

          <div className="space-y-5">

            {journey.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-5"
              >

                {/* Timeline Icon */}

                <div className="relative z-10 flex flex-col items-center">

                  <div
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#231D3D]
                    border-2
                    border-pink-500
                    flex
                    items-center
                    justify-center
                    text-pink-500
                    shadow-[0_0_15px_rgba(236,72,153,.5)]"
                  >
                    {item.icon}
                  </div>

                </div>

                {/* Card */}

                <div
                  className="
                  flex-1
                  bg-[#1E1835]
                  border
                  border-pink-500/20
                  rounded-2xl
                  p-4
                  hover:border-pink-500
                  hover:shadow-[0_0_25px_rgba(236,72,153,.25)]
                  transition-all
                  duration-300"
                >

                  <div className="flex justify-between items-center mb-2">

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <span className="text-pink-400 font-semibold text-sm">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-pink-400 text-sm">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-400 text-sm mt-2 leading-6">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

              </div>
    </section>
  );
}