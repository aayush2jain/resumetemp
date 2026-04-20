import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

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
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className=" sm:px-2 md:px-0 max-w-3xl mx-auto text-white">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 underline underline-offset-8 decoration-yellow-500">
        Contact Me
      </h1>

      <p className="text-base sm:text-lg mb-6 text-center text-gray-300">
        Would love to hear from you!
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4 border border-neutral-700 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg bg-neutral-950/70"
      >
        
        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="flex-1 p-3 text-sm sm:text-base rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="flex-1 p-3 text-sm sm:text-base rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-4 h-32 sm:h-36 text-sm sm:text-base rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
        />

        <input type="hidden" name="_subject" value="New Portfolio Message 🚀" />

        {/* Button */}
        <div className="flex justify-center sm:justify-end">
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 transition-all rounded-xl text-black font-semibold text-base sm:text-lg disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <IoSend className="text-lg sm:text-xl" />
          </button>
        </div>

        {/* Status */}
        {status === "success" && (
          <p className="text-green-400 text-center text-sm sm:text-base">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-center text-sm sm:text-base">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </form>

      {/* Social */}
      <h2 className="text-lg sm:text-xl font-semibold mt-8 text-center">
        Let’s Connect
      </h2>

      <div className="mt-4 flex flex-wrap justify-center gap-6 text-xl sm:text-2xl">
        <a href="https://www.linkedin.com/in/aayush-jain-8a4982279/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin hover:text-yellow-400 transition" />
        </a>
        <a href="https://www.instagram.com/aayushjain8551/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram hover:text-yellow-400 transition" />
        </a>
        <a href="https://github.com/aayush2jain" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github hover:text-yellow-400 transition" />
        </a>
      </div>

    </div>
  );
}