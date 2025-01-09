import { useState } from "react";

const GoogleForm = () => {
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({
    Contact: "",
    Email: "",
  });

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const phone = formData.get("Contact");
    const email = formData.get("Email");

    let isValid = true;
    const newErrors = { Contact: "", Email: "" };

    if (!validatePhone(phone)) {
      newErrors.Contact = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!validateEmail(email)) {
      newErrors.Email = "Please enter a valid Gmail address";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyaFAY1rzoZXY_5x6xV14ykCg_9u1IBRufAz99ik1U8h5GFh6MSKnHQ-2sTwmSTxLF1/exec";

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        console.log("Success!", response);
        setMsg("Message sent successfully");
        setTimeout(() => setMsg(""), 5000);
        form.reset();
        setErrors({ Contact: "", Email: "" });
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="contact-right flex-1 max-w-md ml-auto">
          <span id="msg" className="text-blue-500 mb-4 block">
            {msg}
          </span>
          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <input
              type="text"
              name="FirstName"
              placeholder="Your First Name"
              required
              className="w-full bg-gray-800 text-white py-3 px-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="LastName"
              placeholder="Your Last Name"
              required
              className="w-full bg-gray-800 text-white py-3 px-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="w-full bg-gray-800 text-white py-3 px-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Email && (
              <p className="text-red-500 mb-2">{errors.Email}</p>
            )}
            <input
              type="tel"
              name="Contact"
              placeholder="Your Phone Number"
              required
              className="w-full bg-gray-800 text-white py-3 px-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Contact && (
              <p className="text-red-500 mb-2">{errors.Contact}</p>
            )}
            <input
              type="text"
              name="Message"
              placeholder="Message"
              required
              className="w-full bg-gray-800 text-white py-3 px-4 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="btn btn2 bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoogleForm;
