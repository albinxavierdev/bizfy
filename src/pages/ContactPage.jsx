import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateField = (field, value) => {
    if (!value) return `${field} is required`;

    if (field === "contact") {
      const contactRegex = /^[0-9]{10}$/;
      return contactRegex.test(value)
        ? ""
        : "Enter a valid 10-digit contact number";
    }

    if (field === "email") {
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value)
        ? ""
        : "Enter a valid email address";
    }

    return "";
  };

  const proxyUrl =
    "https://thingproxy.freeboard.io/fetch/";
  const googleScriptUrl =
    "https://script.google.com/macros/s/AKfycbxrjHfa0_rUUADlo7_fSc-OiPt-MrgGM8rgyRpZFjH2gOfT1XsP0EE-YcEyF7ssTTCAqg/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const uniqueID = uuidv4();
    const formDataWithID = { ...formData, uniqueID };

    try {
      const response = await axios.post(
        `${proxyUrl}${googleScriptUrl}`,
        formDataWithID,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
          },
        }
      );

      if (response.data.success) {
        setSuccessMessage("Form Submitted Successfully!");
        setTimeout(() => setSuccessMessage(""), 2000);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          message: "",
        });
      } 
      else {
        alert(
          "This email ID or phone number is already used. Try again."
        );
        // alert("data submitted");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-[#01111f] min-h-screen flex flex-col items-center p-6" >
      <h1
        className="text-4xl font-bold text-white mb-6"
        data-aos="fade-right"
      >
        Get in <span className="text-blue-600">touch</span>
      </h1>

      {successMessage && (
        <div className="bg-green-500 text-white px-4 py-2 rounded mb-4">
          {successMessage}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-0 w-full max-w-6xl p-4 ">
        <div className="space-y-6 font-4xl w-2/3">
          <div className="pb-4 border-b border-gray-500">
            <p className="text-gray-400 font-semibold">Office</p>
            <p className="text-white">Keizersgracht 520, 1017EK</p>
            <p className="text-white">Amsterdam</p>
            <p className="text-white">The Netherlands</p>
          </div>
          <div className="pb-4 border-b border-gray-500">
            <p className="text-gray-400 font-semibold">Email</p>
            <a
              href="mailto:mail@nebula.com"
              className="text-blue-600 hover:underline"
            >
              mail@nebula.com <span>↗</span>
            </a>
          </div>
          <div className="pb-4 border-b border-gray-500">
            <p className="text-gray-400 font-semibold">Phone</p>
            <a
              href="tel:+31202439223"
              className="text-blue-600 hover:underline"
            >
              +31 (0) 20 343 9223 <span>↗</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" p-6 rounded-lg space-y-4"
          data-aos="flip-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-400">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-400">Phone</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="1234567890"
                className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
              />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contact}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-400">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
