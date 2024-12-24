import { Github, MessageSquare, Slack } from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Subscribe",
      description: "Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business' needs.",
      content: (
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-4 border border-gray-600 rounded-lg px-4 py-3">
            <div className="flex items-center justify-center w-8 h-8 bg-[#0E62A6] rounded-full">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-white text-sm sm:text-base">Subscription</span>
          </div>
          <div className="flex flex-wrap gap-2 border border-gray-600 rounded-lg px-4 py-3">
            <button className="px-4 py-2 rounded-full bg-[#01111f] text-white text-sm sm:text-base">Basic</button>
            <button className="px-4 py-2 rounded-full bg-[#01111f] text-white text-sm sm:text-base">Pro</button>
            <button className="px-4 py-2 rounded-full bg-[#01111f] text-white text-sm sm:text-base">Custom</button>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Request",
      description: "Start requesting the workflow-automations and AI applications you need, your developers are right there to transform your ideas into reality.",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4">
          {[<Github />, <Slack />, <MessageSquare />, "🌐", "⚙️", "🚀", "📝", "💬"].map((icon, index) => (
            <div key={index} className="flex items-center justify-center bg-[#01101d] text-gray-400 p-4 rounded-md border border-gray-700">
              {icon}
            </div>
          ))}
        </div>
      ),
    },
    {
      number: "03",
      title: "Build",
      description: "Our developers swiftly begin building your stable solutions, prioritising speed without compromising quality.",
      content: (
        <div className="bg-[#01111f] p-4 rounded-lg overflow-auto">
          <pre className="text-gray-400 text-sm font-mono">
            <code>
              {`import { FeatureSection } from 'bizfy-template';
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};`}
            </code>
          </pre>
        </div>
      ),
    },
    {
      number: "04",
      title: "Test & optimise",
      description: "You either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      content: (
        <div className="space-y-4">
          {[{ label: "Speed", value: 75 }, { label: "Security", value: 70 }, { label: "Accuracy", value: 45 }].map((metric, index) => (
            <div key={index}>
              <div className="text-white mb-1">{metric.label}</div>
              <div className="w-full h-2 bg-gray-800 rounded-full">
                <div className="h-full bg-[#0E62A6] rounded-full" style={{ width: `${metric.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: "05",
      title: "Become an industry leader",
      description: "Continue requesting as many workflow-automations and AI-applications as you wish, and transform your organisation into a worldwide industry leader.",
      content: (
        <div className="relative w-[8rem] sm:w-[10rem] md:w-[12rem] h-[8rem] sm:h-[10rem] md:h-[12rem] mx-auto">
          <svg viewBox="0 0 200 200" className="absolute inset-0">
            <defs>
              <radialGradient id="globe-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="98" fill="none" stroke="url(#globe-gradient)" strokeWidth="0.5" />
            {Array.from({ length: 100 }).map((_, i) => (
              <circle key={i} cx={100 + Math.cos(i * 0.5) * 80} cy={100 + Math.sin(i * 0.5) * 80} r="0.5" fill="rgb(16, 185, 129)" fillOpacity="0.5" />
            ))}
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#01111f] text-white p-8 sm:p-8">
      <nav className="mb-8 sm:mb-16 w-full">
        <h1 className="text-4xl sm:text-4xl font-bold text-white" data-aos="fade-right">
          Our <span className="text-[#0E62A6]">process</span>
        </h1>
      </nav>
      <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3" data-aos="fade-up"
     data-aos-duration="3000">
        {processSteps.map((step, index) => (
          <div key={index} className="p-4 sm:p-6 border border-gray-500 rounded-lg" data-aos="fade-up"
          data-aos-duration="3000">
            <div>{step.content}</div>
            <h2 className="text-lg sm:text-xl font-bold mt-4">
              {step.number}. {step.title}
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
