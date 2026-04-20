import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mzdyvpyn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-[4vh] p-1 underline-offset-16 underline decoration-[2px] decoration-yellow-500">
        Contact Me
      </h1>

      <div className="flex flex-col items-center justify-center mt-4 bg-neutral-950/70 text-white px-4 py-2">
        <p className="text-lg my-4 text-center text-gray-300">
          Would love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl space-y-4 border border-neutral-700 p-6 rounded-3xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="flex-1 p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="flex-1 p-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-4 h-32 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          ></textarea>

          {/* Hidden fields for Formspree */}
          <input type="hidden" name="_subject" value="New Portfolio Message 🚀" />

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 transition-all rounded-xl text-black font-semibold text-lg disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <IoSend className="text-xl mt-[2px]" />
            </button>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </form>

        {/* Social Links */}
        <h1 className="text-xl font-semibold mt-6 text-center">
          Let’s Connect
        </h1>

        <div className="mt-3 flex flex-wrap justify-center gap-6 text-2xl">
          <a href="https://www.linkedin.com/in/aayush-jain-8a4982279/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-yellow-400"></i>
          </a>
          <a href="https://www.instagram.com/aayushjain8551/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram hover:text-yellow-400"></i>
          </a>
          <a href="https://github.com/aayush2jain" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-yellow-400"></i>
          </a>
        </div>
      </div>
    </>
  );
}