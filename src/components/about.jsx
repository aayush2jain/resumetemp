import { IoMdStarOutline } from "react-icons/io";

export default function About() {
    return(
        <>
          <div className="about me text-white">
            <div>
                <h1 className="text-3xl font-bold mb-[4vh] p-1 underline-offset-16 underline decoration-[2px]  decoration-yellow-500">About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit excepturi fugit dignissimos alias ex nostrum est nisi, nemo minus in quis aspernatur voluptatibus praesentium sunt explicabo consequatur perspiciatis ab.</p>
            </div>
            <div className="group">
                <h1 className="text-2xl font-semibold my-[5vh]">What I'm Doing</h1>
                <div className="grid grid-cols-1 px-[5vw] md:px-0 md:grid-cols-2 gap-6">
                <div className="md:w-[30vw] w-full  border-r-[1px] hover:border-[1px] transition-colors duration-1000 ease-in-out  group-hover:border-yellow-400 border-b-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold  text-xl text-yellow-400">Web Design</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="md:w-[30vw] w-full border-r-[1px] transition-colors duration-1000 ease-in-out hover:border-[1px]  group-hover:border-yellow-400 border-b-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold  text-xl text-yellow-400">Web Design</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="md:w-[30vw] w-full border-r-[1px] transition-colors duration-1000 ease-in-out hover:border-[1px]  group-hover:border-yellow-400 border-b-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold  text-xl text-yellow-400">Web Design</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
        
                <div className="md:w-[30vw] w-full border-r-[1px] transition-colors duration-1000 ease-in-out hover:border-[1px] group-hover:border-yellow-400 border-b-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center">
                    <h1 className="font-semibold  text-xl text-yellow-400">Web Design</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>
            <div className="mt-[6vh]">
                <h1 className="text-2xl font-semibold">Achievements</h1>
                <div className="ml-2 mt-2">
                    <div className="flex gap-2">
                    <IoMdStarOutline className="mt-1 text-lg text-yellow-400">
                    </IoMdStarOutline>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className="flex gap-2">
                      <IoMdStarOutline className="mt-1 text-lg text-yellow-400">
                    </IoMdStarOutline>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className="flex gap-2">
                      <IoMdStarOutline className="mt-1 text-lg text-yellow-400">
                    </IoMdStarOutline>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className="flex gap-2">
                      <IoMdStarOutline className="mt-1 text-lg text-yellow-400">
                    </IoMdStarOutline>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}