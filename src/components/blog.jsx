import { useState } from "react";
function BlogCard({ post }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group w-full border bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(250,204,21,0.1)]">
      
      {/* Image */}
      <div className="relative w-full h-[40vh] overflow-hidden">
        
        {/* Skeleton */}
        {!loaded && (
          <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
        )}

        {/* Blur background */}
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30"
        />

        {/* Main image */}
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`relative w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          {new Date(post.date).toLocaleDateString()}
        </p>

        <p className="text-gray-300 mt-3 text-sm leading-relaxed line-clamp-3">
          {post.content}
        </p>

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 mt-4 inline-block hover:text-yellow-300"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}

export default function Blog() {
  const data = [
    {
      title: "Journey Of Portigo: From Concept To Creation",
      date: "2026-10-01",
      content:
        "You have 30 seconds to explain your startup idea—this was the moment that shaped how I define Portigo and the problem it solves.",
      link: "https://www.linkedin.com/posts/aayush-jain-8a4982279_portigo-startupjourney-entrepreneurship-activity-7398423210373066752-b9ME",
      image: "portigoblog.webp",
    },
    {
      title: "My Journey in E-Cell",
      date: "2025-02-20",
      content:
        "Why work for free? Because sometimes the experience, learning, and impact outweigh immediate rewards—this is what E-Cell taught me.",
      link: "https://www.linkedin.com/posts/aayush-jain-8a4982279_ecelldtu-webdevelopment-leadership-activity-7336111850985533441-o_r1",
      image: "ecellpost.webp",
    },
    {
      title: "Project vs Product: What’s the Real Difference?",
      date: "2025-09-15",
      content:
        "A project ends, but a product evolves. Understanding this difference is key to building something that truly delivers long-term value.",
      link: "https://www.linkedin.com/posts/aayush-jain-8a4982279_productmanagement-projectmanagement-freelancing-activity-7370027163615440897-v-pn",
      image: "gnc.webp",
    },
  ];

  return (
    <div className="rounded-3xl text-white/90 ">
      <h1 className="text-3xl font-[700] mb-[4vh] p-1 underline-offset-16 underline decoration-[2px] decoration-yellow-500">
        Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}