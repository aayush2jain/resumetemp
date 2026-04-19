import { IoMdStarOutline } from "react-icons/io";

export default function About() {
    return(
        <>
          <div className="about me text-white">
            <div>
                <h1 className="text-3xl font-bold mb-[4vh] p-1 underline-offset-16 underline decoration-[2px]  decoration-yellow-500">About Me</h1>
                <p>I’m a web developer focused on building clean, modern, and user-centric digital experiences. I transform ideas into scalable products with an emphasis on simplicity, performance, and design. Through my work with initiatives like E-Cell, GNC, and QuickReel, I’ve developed solutions that solve real-world problems.

I’m currently a third-year B.Tech student in Computer Science at Delhi Technological University (DTU), constantly learning and pushing my boundaries to build better products.</p>
            </div>
            <div className="group">
                <h1 className="text-2xl font-semibold my-[5vh]">What I'm Doing</h1>
                <div className="grid grid-cols-1 px-[5vw] md:px-0 md:grid-cols-2 gap-6">
                <div className="md:w-[30vw] w-full  border-r-[1px] hover:border-[1px] transition-colors duration-1000 ease-in-out  group-hover:border-yellow-400 border-b-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold  text-xl text-yellow-400">Frontend Developement</h1>
                    <p>(TailwindCss,React,NextJS,Gsap)</p>
                </div>
                <div className="md:w-[30vw] w-full border-r-[1px] transition-colors duration-1000 ease-in-out hover:border-[1px]  group-hover:border-yellow-400 border-b-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold  text-xl text-yellow-400">Backend Developement</h1>
                    <p>(Node.js,Express,MongoDB,Postman)</p>
                </div>
                <div className="md:w-[30vw] w-full border-r-[1px] transition-colors duration-1000 ease-in-out hover:border-[1px]  group-hover:border-yellow-400 border-b-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold  text-xl text-yellow-400">Full Stack Developement</h1>
                    <p>(React,Node.js,Express,MongoDB ,PostgreSQL,AWS)</p>
                </div>
        
                <div className="md:w-[30vw] w-full border-r-[1px] transition-colors duration-1000 ease-in-out hover:border-[1px] group-hover:border-yellow-400 border-b-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold  text-xl text-yellow-400">Seo Optimization</h1>
                    <p>(Google Analytics, Google Search Console, Meta Tags)</p>
                </div>
                </div>
            </div>
            <div className="mt-[6vh]">
                <h1 className="text-2xl font-semibold">Achievements</h1>
                <div className="ml-2 mt-2">
                    <div className="flex gap-2">
                    <IoMdStarOutline className="mt-1 text-lg text-yellow-400">
                    </IoMdStarOutline>
                    <div>Launched Portigo a DTU IIF-incubated portfolio platform, securing ₹50K pre-seed funding</div>
                    </div>
                    <div className="flex gap-2">
                      <IoMdStarOutline className="mt-1 text-lg text-yellow-400">
                    </IoMdStarOutline>
                    <div>Redesigned and developed the E-Cell website, handling 500+ registrations, 1,000+ visitors, and processing ₹10,000+ in transactions.</div>
                    </div>
                    <div className="flex gap-2">
                      <IoMdStarOutline className="mt-1 text-lg text-yellow-400">
                    </IoMdStarOutline>
                    <div>Winner of codescript 2026 and winner of sih phase-1(2025)</div>
                    </div>
                    <div className="flex gap-2">
                      <IoMdStarOutline className="mt-1 text-lg text-yellow-400">
                    </IoMdStarOutline>
                    <div>Delivered 10+ web development projects and solved 400+ DSA problems.</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}