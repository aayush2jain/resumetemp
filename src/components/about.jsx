import { IoMdStarOutline } from "react-icons/io";

export default function About() {
  return (
    <div className="text-white px-4 sm:px-6 md:px-0">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 underline underline-offset-8 decoration-yellow-500">
        About Me
      </h1>

      {/* About Text */}
      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
        I’m a web developer focused on building clean, modern, and user-centric digital experiences. 
        I transform ideas into scalable products with an emphasis on simplicity, performance, and design. 
        Through my work with initiatives like E-Cell, GNC, and QuickReel, I’ve developed solutions that solve real-world problems.
        <br /><br />
        I’m currently a third-year B.Tech student in Computer Science at Delhi Technological University (DTU), 
        constantly learning and pushing my boundaries to build better products.
      </p>

      {/* What I'm Doing */}
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          What I'm Doing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {[
            {
              title: "Frontend Development",
              tech: "Tailwind, React, Next.js, GSAP",
            },
            {
              title: "Backend Development",
              tech: "Node.js, Express, MongoDB",
            },
            {
              title: "Full Stack Development",
              tech: "React, Node, PostgreSQL, AWS",
            },
            {
              title: "SEO Optimization",
              tech: "Analytics, Search Console, Meta Tags",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-full border border-neutral-700 hover:border-yellow-400/40 
              bg-gradient-to-br from-neutral-800 to-neutral-900 
              rounded-2xl p-5 text-center transition-all duration-300 
              hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)]"
            >
              <h3 className="font-semibold text-lg text-yellow-400">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-2">
                {item.tech}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Achievements */}
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Achievements
        </h2>

        <div className="space-y-4">
          
          {[
            "Launched Portigo, a DTU IIF-incubated platform securing ₹50K pre-seed funding",
            "Redesigned the E-Cell website handling 500+ registrations, 1,000+ visitors, and ₹10K+ transactions",
            "Winner of CodeScript 2026 and SIH Phase-1 (2025)",
            "Built 10+ projects and solved 400+ DSA problems",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <IoMdStarOutline className="text-yellow-400 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-neutral-300">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}