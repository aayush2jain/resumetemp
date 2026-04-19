export default function Project() {
  const data = [
    {
      title: "Portfolio Creator",
      year: "2025",
      description:
        "A no-code SaaS platform enabling users to create and deploy personal portfolio websites using customizable templates, with secure authentication and scalable backend.",
      tech: "React, Next.js, Node.js, SQL",
      link: "https://myportfolio-phi-snowy-32.vercel.app",
      image: "portfolio.png",
    },
    {
      title: "E-Cell DTU Website",
      year: "2024",
      description:
        "Redesigned and developed the official E-Cell website to handle 500+ registrations, 1,000+ visitors, and ₹10K+ in transactions with improved performance and UX.",
      tech: "React, Node.js, MongoDB",
      link: "https://www.ecelldtu.in/",
      image: "ecell.png",
    },
    {
      title: "Misthan (E-commerce)",
      year: "2024",
      description:
        "A fully responsive e-commerce platform for sweets and snacks with integrated Razorpay payments and a mobile-first user experience.",
      tech: "React, Node.js, Razorpay",
      link: "https://misthan-five.vercel.app/",
      image: "misthan.png",
    },
    {
      title: "VideoTube",
      year: "2023",
      description:
        "A video-sharing platform with authentication, CRUD functionality, and dynamic content rendering, inspired by modern streaming applications.",
      tech: "React, Node.js, Express",
      link: "https://frontend-three-pi-10.vercel.app/",
      image: "videotube.png",
    },
    {
      title: "E-commerce Frontend",
      year: "2024",
      description:
        "A modern e-commerce frontend built with reusable components, optimized UI, and responsive design using Tailwind CSS.",
      tech: "React, Tailwind CSS",
      link: "https://ecommerce-murex-one-29.vercel.app",
      image: 'vogueish.png',
    },
  ];

  return (
    <section className="px-6 md:px-0 relative">
      <h1 className="text-3xl font-[700] mb-[6vh] p-1 underline-offset-16 underline decoration-[2px] decoration-yellow-500">
        Projects
      </h1>

      {data.map((item, idx) => (
        <div
  key={idx}
  className={`flex flex-col md:flex-row gap-6 group ml-2 
  transition-all duration-300 ease-out 
  hover:scale-[1.03] hover:shadow-2xl hover:shadow-yellow-500/10 
  hover:border hover:border-yellow-400/20 rounded-2xl p-3
  ${
    idx !== data.length - 1
      ? "border-b border-neutral-800 pb-6 mb-6"
      : ""
  }`}
>
          {/* Image */}
          <div className="relative w-full md:w-[40%] overflow-hidden rounded-2xl">
  <a href={item.link} target="_blank" rel="noopener noreferrer">
    
    <img
      src={item.image}
      alt={item.title}
      className="rounded-2xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
      <span className="text-white text-sm border border-white px-3 py-1 rounded-lg">
        View Project ↗
      </span>
    </div>

  </a>
</div>

          {/* Text */}
          <div className="flex flex-col justify-center w-full">
            <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-sm text-yellow-400 mt-1">{item.year}</p>

            <p className="text-sm text-gray-400 mt-1">{item.tech}</p>

            <p className="text-gray-300 mt-3 leading-relaxed">
              {item.description}
            </p>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 mt-4 inline-block transition-all duration-300 hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}