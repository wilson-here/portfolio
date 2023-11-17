/* eslint-disable react/no-unescaped-entities */
import CTA from "../components/CTA";
import { Link, useLocation } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences, socialLinks } from "../constants";
import { avatar } from "../assets/images";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <section className="max-container">
      <h1 className="head-text text-left w-full">
        👋 Hi there, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Wilson
        </span>
      </h1>
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-6 mt-6 items-center">
        <div className="flex flex-col gap-3 text-slate-500">
          <p className="text-justify">
            I am a Frontend Developer based in <b>Vinh, Nghe An, Vietnam</b>. My
            expertise lies in web development using{" "}
            <b>
              React.js, Next.js, Tailwind CSS, MongoDB, Wordpress, and Sanity
            </b>
            . Currently I am expanding my skills with TypeScript and actively
            seeking new job opportunities.
          </p>
        </div>
        <div>
          <div className="w-32 h-32 overflow-hidden rounded-full shrink-0">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full object-top object-cover w-36 h-36 "
            />
          </div>
          <div className="mt-3 flex items justify-center gap-4 text-[#1d2235]">
            {socialLinks.map((socialLink) => (
              <Link
                key={`link ${socialLink.name}`}
                to={
                  socialLink.name === "Email"
                    ? `mailto:${socialLink.link}`
                    : socialLink.name === "Phone"
                    ? `tel:${socialLink.link}`
                    : socialLink.link
                }
                target={
                  socialLink.name === "Email" || socialLink.name === "Phone"
                    ? null
                    : "_blank"
                }
                rel={
                  socialLink.name === "Email" || socialLink.name === "Phone"
                    ? null
                    : "noopener noreferer"
                }
                className="w-5 h-5 inline-block transition hover:opacity-80"
              >
                {socialLink.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className="mt-16 flex flex-wrap gap-12 justify-center">
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
                  <h3 className="text-black text-lg sm:text-xl font-poppins font-semibold">
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
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My projects</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center  justify-between gap-4">
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              In my developer journey, doing various projects have been
              invaluable learning experiences. Each one contributes to my
              ongoing growth in web development.
              <br />
              <br />
              Click Projects to learn more.
            </p>
          </div>
          <Link to="/projects" className="btn max-w-[100px]">
            Projects
          </Link>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Home;
