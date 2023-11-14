import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className="cta">
      <div className="py-10">
        <h3 className="subhead-text">Contact me</h3>

        <div className="mt-5 flex items-center  justify-between gap-4 text-slate-500">
          <p>Have a project in mind? Let's build something together!</p>
          <Link to="/contact" className="btn border-r max-w-[100px]">
            Contact
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="flex items-center justify-center gap-4 text-slate-500">
            Or contact me via
            <div className="flex items justify-center gap-4 text-[#1d2235]">
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
      </div>

      {/* <div className="cta-up">
        <p className="cta-text">
          Have a project in mind? <br className="sm:block hidden" />
          Let's build something together!
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 mt-5 font-medium sm:text-xl text-[#1d2235]">
        Or contact me via
        <div className="flex items justify-center mt-3 gap-4">
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
      </div> */}
    </section>
  );
};

export default CTA;
