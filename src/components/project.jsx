export default function Project() {
    const data = [
        {
        title: "Portfolio Website",
        year: "2023",
        description: "A personal portfolio website showcasing my projects and skills.",
        link: "https://myportfolio.com",
        },
        {
        title: "E-commerce Platform",
        year: "2022",
        description: "An e-commerce platform built with React and Node.js.",
        link: "https://ecommerceplatform.com",
        },
        {
        title: "Blog Application",
        year: "2021",
        description: "A blog application with user authentication and CRUD operations.",
        link: "https://myblogapp.com",
        },
    ];
    
    return (
       <section className="px-6 md:px-0 relative">
  <h1 className="text-3xl font-[700] mb-[6vh] p-1  underline-offset-16 underline decoration-[2px]  decoration-yellow-500 ">Projects</h1>

{data.map((item, idx) => (
  <div
    key={idx}
    className={`flex flex-col ml-2 md:flex-row gap-6 group  ${
      idx !== data.length - 1 ? 'border-b border-neutral-700 pb-4 mb-4' : ''
    }`}
  >
    {/* Image */}
    <div className="w-full md:w-[40%] group-hover:border-1 border-yellow-400 rounded-2xl  overflow-hidden">
      <img
        className="rounded-2xl w-full h-full object-cover shadow-md"
        src={'blog-1.jpg'}
        alt={item.title}
      />
    </div>

    {/* Text */}
    <div className="flex flex-col justify-center w-full">
      <h3 className="text-2xl transition-colors duration-400 ease-in-out font-semibold text-white group-hover:text-yellow-400 mb-1">
        {item.title}
      </h3>
      <p className="text-sm text-gray-400">React, Node.js, Express</p>
      <p className="text-gray-300 mt-2">
        {item.description} 
      </p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:underline mt-3 inline-block transition-colors duration-200 ease-in-out"
        >
         View Project
        </a>
      )}
    </div>
  </div>
))}

</section>

    );
}