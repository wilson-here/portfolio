/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <section className="max-container">
      <h1 className="head-text text-left w-full">
        🐱‍💻 Hi there, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Wilson
        </span>
      </h1>
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-6 mt-6 items-center">
        <div className="flex flex-col gap-3 text-slate-500">
          <p>
            I am a Frontend Developer located in Vinh, Nghe An, Vietnam, with
            expertise in crafting dynamic websites using React.js, Next.js and
            CMS platforms such as WordPress and Sanity. Currently, I am
            broadening my skills by delving into TypeScript.
          </p>
        </div>
        <div className="w-32 h-32 overflow-hidden rounded-full shrink-0">
          <img
            src="/src/assets/images/avatar.png"
            alt="avatar"
            className="rounded-full object-top object-cover w-36 h-36 "
          />
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Education & Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've learned and worked with all sorts of organization, leveling up
            my skills and teaming up with great people. Here's the rundown:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.company_name}
                date={exp.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: exp.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: exp.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {exp.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {exp.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exp.points.map((point, i) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      key={`exp-point-${i}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Home;