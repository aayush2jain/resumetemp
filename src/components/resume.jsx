// pages/Education.jsx
// components/TimelineItem.jsx
import { TfiBook } from "react-icons/tfi";
import { MdOutlineWorkHistory } from "react-icons/md";

const skills = [
  { name: "Web Design", percent: 80 },
  { name: "Graphic Design", percent: 70 },
  { name: "Branding", percent: 90 },
  { name: "WordPress", percent: 50 },
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
      title: "Delhi College of Engineering",
      year: "2023 — 2027",
    },
    {
      title: "University School Of The Arts",
      year: "2007 — 2008",
    },
    {
      title: "New York Academy Of Art",
      year: "2006 — 2007",
    },
  ];
  const experienceData = [
    {
      title: "Software Engineer Intern",
      year: "2023 — Present",
      description: "Working on various projects using React and Node.js.",
    },
    {
      title: "Web Developer Intern",
      year: "2022 — 2023",
      description: "Developed responsive websites using HTML, CSS, and JavaScript.",
    },
    {
      title: "Freelance Web Developer",
      year: "2021 — 2022",
      description: "Worked on multiple freelance projects for various clients.",
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
    <section className="px-6 md:py-6 md:px-0 relative mt-[4vh] md:mt-0">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <span className="text-yellow-400 mr-4 text-xl p-3 border-l-[1px] border-t-[1px] border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl ml-1.5">
          <MdOutlineWorkHistory />
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

