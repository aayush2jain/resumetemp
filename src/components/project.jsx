export default function Project() {
  const data = [
    {
      title: "Portfolio Creator",
      year: "2025",
      description:
        "A no-code SaaS platform enabling users to create and deploy personal portfolio websites using customizable templates, with secure authentication and scalable backend.",
      tech: "React, Next.js, Node.js, SQL",
      link: "https://myportfolio-phi-snowy-32.vercel.app",
      image: "portfolio.webp",
    },
    {
      title: "E-Cell DTU Website",
      year: "2024",
      description:
        "Redesigned and developed the official E-Cell website to handle 500+ registrations, 1,000+ visitors, and ₹10K+ in transactions with improved performance and UX.",
      tech: "React, Node.js, MongoDB",
      link: "https://www.ecelldtu.in/",
      image: "ecell.webp",
    },
    {
      title: "Misthan (E-commerce)",
      year: "2024",
      description:
        "A fully responsive e-commerce platform for sweets and snacks with integrated Razorpay payments and a mobile-first user experience.",
      tech: "React, Node.js, Razorpay",
      link: "https://misthan-five.vercel.app/",
      image: "misthan.webp",
    },
    {
      title: "VideoTube",
      year: "2023",
      description:
        "A video-sharing platform with authentication, CRUD functionality, and dynamic content rendering, inspired by modern streaming applications.",
      tech: "React, Node.js, Express",
      link: "https://frontend-three-pi-10.vercel.app/",
      image: "videotube.webp",
    },
    {
      title: "E-commerce Frontend",
      year: "2024",
      description:
        "A modern e-commerce frontend built with reusable components, optimized UI, and responsive design using Tailwind CSS.",
      tech: "React, Tailwind CSS",
      link: "https://ecommerce-murex-one-29.vercel.app",
      image: 'vogueish.webp',
    },
  ];

  return (
  <section className="sm:px-4 md:px-0 max-w-5xl mx-auto">
  
  <h1 className="text-2xl sm:text-3xl font-bold mb-8 underline underline-offset-8 decoration-yellow-500">
    Projects
  </h1>

  {data.map((item, idx) => (
    <div
      key={idx}
      className={`flex flex-col md:flex-row gap-5 group 
      transition-all duration-300 ease-out 
      hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10 
      rounded-2xl p-3
      ${
        idx !== data.length - 1
          ? "border-b border-neutral-800 pb-6 mb-6"
          : ""
      }`}
    >
      
      {/* Image */}
      <div className="relative w-full md:w-[40%] h-[200px] sm:h-[240px] md:h-[220px] overflow-hidden rounded-2xl">
        <a href={item.link} target="_blank" rel="noopener noreferrer">

          {/* Blur background */}
          <img
            src={item.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
          />

          {/* Main image */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-xs sm:text-sm border border-white px-3 py-1 rounded-lg">
              View Project ↗
            </span>
          </div>

        </a>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center w-full">
        
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-yellow-400 mt-1">
          {item.year}
        </p>

        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          {item.tech}
        </p>

        <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
          {item.description}
        </p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 mt-4 inline-block text-sm sm:text-base hover:underline"
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