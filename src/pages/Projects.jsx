
import Marquee from "react-fast-marquee";

const projectData = [
  {
    title: "Yukti AI",
    description:
      "Indore's pioneering EduAI companion helping programming students master coding through personalized learning and real-time assistance.",
  },
  {
    title: "Data Canvas",
    description:
      "An intelligent data analysis assistant that streamlines complex analytics workflows and enhances decision-making for data professionals.",
  },
  {
    title: "Biz2B",
    description:
      "Smart automation platform that optimizes LinkedIn and Twitter engagement to drive meaningful business connections and growth.",
  },
  {
    title: "TheDataCareer",
    description:
      "AI-powered talent matching platform revolutionizing how data professionals connect with their ideal career opportunities.",
  },
  {
    title: "ELegalShala",
    description:
      "Voice-enabled AI legal assistant providing instant access to case law, precedents, and legal knowledge for practicing lawyers.",
  },
  {
    title: "AppliedSpace",
    description:
      "Intelligent platform connecting startup founders with relevant investors through AI-driven matchmaking and insights.",
  },
  {
    title: "AppliedSchool",
    description:
      "Next-generation learning management system utilizing AI to deliver personalized, application-focused educational experiences.",
  },
  {
    title: "StockRiver",
    description:
      "Innovative marketplace connecting AI-generated stock imagery with creators, featuring smart prompt engineering and asset management.",
  },
  {
    title: "EngageFlow",
    description:
      "Comprehensive AI content suite that transforms research into engaging multi-platform content across social media, automating everything from ideation to final delivery.",
  },
];

function Projects() {
  return (
    <div className="pt-16 mb-10 relative w-full justify-end overflow-hidden bg-transparent">
      <nav className="flex justify-between items-center mb-10 ml-10">
        <h1 className="text-4xl font-bold text-white" data-aos="fade-right">
          Our <span className="text-blue-600">Projects</span>
        </h1>
      </nav>

      <Marquee
        gradient={true}
        speed={150}
        pauseOnHover={true}
        gradientColor="#01111f"
        gradientWidth="8%"
      >
        <div className="flex gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="relative flex shrink-0 gap-8 p-6 m-4">
              {/* Background dots grid */}
              <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(8px,1fr))] grid-rows-[repeat(auto-fill,minmax(8px,1fr))] gap-1">
                {Array.from({ length: 1102 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[3px] w-[3px] rounded-full bg-blue-300/50"
                  />
                ))}
              </div>

              {/* Card */}
              <div className="group relative flex h-[400px] w-[300px] flex-col justify-end rounded-2xl bg-zinc-400/90 backdrop-blur-sm p-4 text-white overflow-hidden">
                <div className="relative h-full flex flex-col transition-all duration-300">
                  {/* Title */}
                  <div className="text-xl font-bold group-hover:-translate-y-0 transition-all duration-300">
                    {project.title}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-zinc-300 transform translate-y-60 opacity-0 group-hover:opacity-100 group-hover:translate-y-48 transition-all duration-300">
                    {project.description}
                  </div>

                  {/* Visit Button */}
                  <div className="mt-4 transform translate-y-60 opacity-0 transition-all duration-300 group-hover:translate-y-48 group-hover:opacity-100">
                    <button className="flex items-center gap-2 bg-transparent px-4 py-2 rounded-lg hover:bg-blue-100/30 transition-colors">
                      Visit
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Projects;
