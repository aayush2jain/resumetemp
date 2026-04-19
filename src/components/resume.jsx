// pages/Education.jsx
// components/TimelineItem.jsx
import { TfiBook } from "react-icons/tfi";
import { MdOutlineWorkHistory } from "react-icons/md";
const skills = [
  { name: "React.js / Next.js", percent: 90 },
  { name: "Node.js / Express", percent: 85 },
  { name: "MongoDB / SQL", percent: 80 },
  { name: "JavaScript / TypeScript", percent: 90 },
  { name: "Tailwind CSS / UI", percent: 85 },
  { name: "DSA & Problem Solving", percent: 80 },
];
function TimelineItem({ title, year, isLast,description }) {
  return (
    <div className="flex gap-8 relative">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-yellow-400 border-[3px] border-neutral-600/70 rounded-full mt-1.5 -ml-1.5 z-10"></div>
        {!isLast && (
          <div className="w-[1px] h-full -ml-1.5 bg-neutral-600/70"></div>
        )}
      </div>
      <div className="mb-2.5">
        <h1 className="text-zinc-100 font-semibold">{title}</h1>
        <h2 className="text-sm mt-2.5 text-yellow-400">{year}</h2>
        <h3 className="text-neutral-200">{description}</h3>
      </div>
    </div>
  );
}


export default function Education() {
  const data = [
  {
    title: "Delhi Technological University (DTU) — B.Tech IT",
    year: "2023 — 2027",
  },
  {
    title: "Savitri Devi Vidya Niketan (Class 12)",
    year: "2022 — 2023",
  },
  {
    title: "Savitri Devi Vidya Niketan (Class 10)",
    year: "2020 — 2021",
  },
];

const experienceData = [
  {
    title: "Software Developer Intern — Quickreel (USIP)",
    year: "Aug 2024 — Jan 2025",
    description:
    "Tested 10+ REST APIs, built a YouTube-integrated Chrome extension, and developed a metadata extraction API using ytdl-core."
  },
  {
    title: "Freelance Developer — GNC India",
    year: "May 2025 — June 2025",
    description:
      "Built a task system for 100+ ambassadors, cutting coordination time by 60% and increasing engagement by 30%."
  },
  {
    title: "Frontend Developer Intern — Vogueish",
    year: "June 2024 — Aug 2024",
    description:
      "Developed a responsive retail website using Next.js, improving mobile load speed by 25% and reducing UI bugs by 40%.",
  },
];

  return (
    <>
    <section className="px-6  md:px-0 relative">
      <h1 className="text-3xl font-[700] mb-[4vh] p-1 underline-offset-16 underline decoration-[2px]  decoration-yellow-500">Resume</h1>
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <span className="text-yellow-400 mr-4 text-xl p-3 border-l-[1px] border-t-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl ml-1.5">
          <TfiBook />
        </span>{" "}
        Experience
      </h2>
      <div className="ml-7">
       {experienceData.map((item, idx) => (
  <TimelineItem
    key={idx}
    {...item}
    isLast={idx === data.length - 1}
  />
))}
      </div>
    </section>
    <section className="px-6 md:py-6 md:px-0 relative mt-[4vh] md:mt-0">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <span className="text-yellow-400 mr-4 text-xl p-3 border-l-[1px] border-t-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl ml-1.5">
          <MdOutlineWorkHistory />
        </span>{" "}
        Education
      </h2>
      <div className="ml-7">
       {data.map((item, idx) => (
  <TimelineItem
    key={idx}
    {...item}
    isLast={idx === data.length - 1}
  />
))}
      </div>
    </section>
    <div>
        <h1 className="text-2xl m-2 font-bold text-white mt-[4vh] md:mt-0 ">My Skills</h1>
     <div className=" p-6 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-lg">
      {skills.map((skill, index) => (
        <div key={index} className="mb-5 ">
          <div className="flex justify-between text-white mb-2">
            <span className="font-semibold">{skill.name}</span>
            <span>{skill.percent}%</span>
          </div>
          <div className="w-full bg-[#2e2e2e] h-2 rounded-full">
            <div
              className="h-2 rounded-full bg-yellow-400"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

