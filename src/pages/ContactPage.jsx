import ProjectEstimatorForm from "./ProjectEstimatorForm";
const ContactPage = () => {
  
  return (
    <div
      id="contact"
      className="py-16 flex flex-col justify-center items-center bg-transparent text-white"
    >
      <h1
        className="text-4xl font-bold text-center text-white mb-6"
        data-aos="fade-right"
      >
        Get in <span className="text-blue-600">Touch</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-0 w-full max-w-6xl p-4 ">
        <div className="space-y-6 font-4xl w-2/3 pl-5 sm:pl-0">
          <div className="pb-4 border-b border-gray-500">
            <p className="text-gray-400 font-semibold">Office</p>
            <p className="text-white">204, C.S Naidu Arcade, Old Palasiya</p>
            <p className="text-white">Indore, Madhya Pradesh</p>
            <p className="text-white">India, 452001</p>
          </div>
          <div className="pb-4 border-b border-gray-500">
            <p className="text-gray-400 font-semibold">Email</p>
            <a
              href="mailto:info@bizfy.in"
              className="text-blue-600 hover:underline"
            >
              info@bizfy.in <span>↗</span>
            </a>
          </div>
          <div className="pb-4 border-b border-gray-500">
            <p className="text-gray-400 font-semibold">Phone</p>
            <a
              href="tel:+918878789891"
              className="text-blue-600 hover:underline"
            >
              +91 88787-89891 <span>↗</span>
            </a>
          </div>
        </div>
        <ProjectEstimatorForm />
      </div>
    </div>
  );
};

export default ContactPage;