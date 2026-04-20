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