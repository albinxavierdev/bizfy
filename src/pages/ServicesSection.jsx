import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Bot, Frame, Database } from "lucide-react";

const ServicesSection = () => {
  const data = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 35 },
    { name: "May", value: 55 },
    { name: "Jun", value: 40 },
    { name: "Jul", value: 50 },
  ];

  const services = [
    {
      title: "Workflow automations",
      description:
        "We automate your workflows by connecting your favourite applications. Boosting efficiency and enhancing productivity.",
      content: (
        <div className="p-4 border border-gray-600 rounded-lg">
          <div className="flex items-center gap-4 p-2 mb-2 border border-gray-600 rounded-lg">
            <Frame className="text-blue-600" size={24} />
            <div>
              <div className="text-white">Framer</div>
              <div className="text-gray-400">New contact form submission</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 mb-2 border border-gray-600 rounded-lg">
            <Database className="text-blue-600" size={24} />
            <div>
              <div className="text-white">Airtable</div>
              <div className="text-gray-400">Add data to Airtable</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 border border-gray-600 rounded-lg">
            <Bot className="text-blue-600" size={24} />
            <div>
              <div className="text-white">OpenAI</div>
              <div className="text-gray-400">Write personalised message</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Chatbot development",
      description:
        "We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.",
      content: (
        <div className="p-4 border border-gray-700 rounded-lg">
          <div className="flex items-start gap-4">
            <Bot className="text-blue-600" size={30} />
            <div>
              <div className="flex justify-between text-white">
                <span className="font-bold">AI assistant</span>
                <span className="text-gray-400">Siena Sinner</span>
              </div>
              <div className="text-gray-400">Sure, here&apos;s a summary:</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Business consulting",
      description:
        "Using our expertise, we delve deep into your organisation and consult you on how AI-driven automations could enhance your operations.",
      content: (
        <div className="relative h-64 p-4 border border-gray-700 rounded-lg">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2699E6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2699E6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2699E6"
                fill="url(#colorValue)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#01111f] h-full px-8 py-16" data-aos="fade-up">
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-4xl font-bold text-white" data-aos="fade-up">
          Our <span className="text-blue-600">services</span>
        </h1>
      </nav>

      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#01111f] p-6 border border-gray-600 rounded-lg"
            data-aos="fade-up">
            {service.content}
            <h2 className="text-2xl font-bold text-white mt-6">
              {service.title}
            </h2>
            <p className="text-gray-400 text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
