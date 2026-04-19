export  default function CV() {
    return(
        <>
        <div className="mt-10">
  <h2 className="text-2xl font-bold text-white mb-4">Resume</h2>

  <div className="w-full h-[600px] border border-neutral-700 rounded-xl overflow-hidden">
    <iframe
      src="/resume.pdf"
      className="w-full h-full"
      title="Resume"
    />
  </div>

  <a
    href="/resume.pdf"
    download
    className="inline-block mt-4 text-yellow-400 hover:underline"
  >
    Download Resume →
  </a>
</div>
        </>
    )
}
