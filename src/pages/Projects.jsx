import { Link, useLocation } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { useEffect } from "react";

const Projects = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <section className="max-container">
      <h1 className="head-text text-align">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Discover the array of hands-on web development projects I've
          personally crafted. Each project is a reflection of my commitment to
          building user-friendly solutions with a touch of creativity.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div key={project.name} className="lg:w-[400px] w-full">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="project icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="flex gap-8 items-center mt-4">
                <Link
                  to={project.live}
                  target="_blank"
                  rel="noopener noreferer"
                  className="font-semibold text-blue-600 inline-flex self-start gap-1 items-center font-poppins hover:cursor-pointer hover:opacity-80 transition"
                >
                  Live
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </Link>
                <Link
                  to={project.github}
                  target="_blank"
                  rel="noopener noreferer"
                  className="font-semibold text-blue-600 inline-flex self-start gap-1 items-center font-poppins hover:cursor-pointer hover:opacity-80 transition"
                >
                  Github
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
