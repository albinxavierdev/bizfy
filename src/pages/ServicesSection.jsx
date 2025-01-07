// import { AreaChart, Area, ResponsiveContainer } from "recharts";
// import { Bot, Frame, Database } from "lucide-react";

const ServicesSection = () => {
  // const data = [
  //   { name: "Jan", value: 40 },
  //   { name: "Feb", value: 30 },
  //   { name: "Mar", value: 45 },
  //   { name: "Apr", value: 35 },
  //   { name: "May", value: 55 },
  //   { name: "Jun", value: 40 },
  //   { name: "Jul", value: 50 },
  // ];

  const services = [
    {
      title: "Workflow automations",
      description:
        "Streamline your operations by automating repetitive tasks and processes, boosting efficiency and reducing manual workload.",
      content: (
        <div className=" border border-gray-600 rounded-lg">
          {/* <div className="flex items-center gap-4 p-2 mb-2 border border-gray-600 rounded-lg">
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
          </div> */}
          <img src="/Our Services/Subscription Tier.jpg" alt="" className="rounded-lg"/>
        </div>
      ),
    },
    {
      title: "Gen AI Marketing & Content",
      description:
        "Create engaging, AI-powered content and marketing campaigns that resonate with your audience while maintaining brand authenticity.",
      content: (
        <div className=" border border-gray-700 rounded-lg flex h-full justify-center items-center">
          {/* <div className="flex items-start justify-center gap-4">
            <div>
            <Bot className="text-blue-600" size={30} />
              <div className="flex justify-between text-white flex-col">
                <div className="font-bold pr-2 ">AI assistant</div><br />
                <span className="text-gray-400">Siena Sinner</span>
              </div>
              <div className="text-gray-400">Sure, here&apos;s a summary:</div>
            </div>
          </div> */}
          <img src="/Our Services/7.jpg" alt="" className="rounded-lg"/>
        </div>
      ),
    },
    {
      title: "Custom LLM Deployments",
      description:
        "Design and implement customized language models tailored to your specific business requirements and industry needs.",
      content: (
        <div className=" h-full border border-gray-700 rounded-lg ">
          {/* {[{ label: "Speed", value: 75 }, { label: "Security", value: 70 }, { label: "Accuracy", value: 45 }].map((metric, index) => (
            <div key={index}>
              <div className="text-white mb-1">{metric.label}</div>
              <div className="w-full h-2 bg-gray-800 rounded-full">
                <div className="h-full bg-[#0E62A6] rounded-full" style={{ width: `${metric.value}%` }}></div>
              </div>
            </div>
          ))} */}
          <img src="/Our Services/8.jpg" alt="" className="rounded-lg h-full"/>
        </div>
      ),
    },
    {
      title: "AI Consultation & Outsourcing",
      description:
        "Get expert guidance and dedicated resources to develop and execute your AI strategy from concept to implementation.",
      content: (
        <div className="relative h-full  border border-gray-700 rounded-lg">
          {/* <ResponsiveContainer width="100%" height="100%">
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
          </ResponsiveContainer> */}
          <img src="/Our Services/9.jpg" alt="" className="rounded-lg h-full"/>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#01111f] h-full px-8 py-16">
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-4xl font-bold text-white" data-aos="fade-right">
          Our <span className="text-blue-600">Services</span>
        </h1>
      </nav>

      <div
        className="px-0 sm:px-10 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-2"
        data-aos="fade-up"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#01111f] p-6 border border-gray-600 rounded-lg flex flex-col justify-end"
            data-aos="fade-up">
            {service.content}
            <h2 className="text-xl font-bold text-white mt-6">
              {service.title}
            </h2>
            <p className="text-gray-400  text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServicesSection;
