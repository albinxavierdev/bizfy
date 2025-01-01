import { useState } from "react";

const ContactPage = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContact = (contact) => {
    const contactRegex = /^\d{10}$/;
    return contactRegex.test(contact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const contact = form.contact.value;

    // Validation checks
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validateContact(contact)) {
      setError("Please enter a valid 10-digit contact number.");
      return;
    }

    setError(""); // Clear any previous errors

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyddNTNI5UxwPF_Y2Iqw9r6RkpOd5Pft69y45mcPnMyx6vIKynOKDDUMbpeWLru_IFb/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        setMsg("Message sent successfully");
        setTimeout(() => setMsg(""), 3000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="bg-[#01111f] min-h-screen flex flex-col items-center p-6 pt-20">
      <h1 className="text-4xl font-bold text-white mb-6" data-aos="fade-right">
        Get in <span className="text-blue-600">Touch</span>
      </h1>

      {msg && (
        <div
          id="msg"
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          {msg}
        </div>
      )}

      {error && (
        <div
          id="error"
          className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        >
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-0 w-full max-w-6xl p-4 ">
        <div className="space-y-6 font-4xl w-2/3">
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
              mailto:info@bizfy.in <span>↗</span>
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

        <form
          onSubmit={handleSubmit}
          name="submit-to-google-sheet"
          className=" p-6 rounded-lg space-y-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                required
                className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-400">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                required
                className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-400">Phone</label>
              <input
                type="tel"
                name="contact"
                placeholder="1234567890"
                required
                className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-400">Message</label>
            <textarea
              rows="4"
              name="message"
              placeholder="Your message here..."
              required
              className="text-gray-100 bg-transparent border border-gray-700 rounded w-full px-3 py-2"
            ></textarea>
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
