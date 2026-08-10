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
    <section id="education" className="bg-[#161329] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-6">

          <p className="uppercase tracking-[3px] text-pink-500 text-xs font-semibold">
            MY JOURNEY
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Education
            <span className="text-pink-500">
              {" "}& Learning Journey
            </span>
          </h2>

          <p className="text-gray-400 text-sm mt-2 max-w-lg mx-auto">
            My learning path from university to becoming a Full Stack Developer.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-4 top-0 h-full w-[2px] bg-pink-500/30"></div>

          <div className="space-y-4">

            {journey.map((item, index) => (

              <div key={index} className="flex gap-4">

                {/* Icon */}

                <div className="relative z-10">

                  <div
                    className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#231D3D]
                    border
                    border-pink-500
                    flex
                    items-center
                    justify-center
                    text-pink-500
                    text-sm"
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
                  rounded-xl
                  px-4
                  py-3
                  hover:border-pink-500
                  transition"
                >

                  <div className="flex justify-between items-center">

                    <h3 className="text-base font-semibold">
                      {item.title}
                    </h3>

                    <span className="text-pink-400 text-xs font-semibold">
                      {item.year}
                    </span>

                  </div>

                  <p className="text-pink-400 text-xs mt-1">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-400 text-sm mt-2 leading-5">
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