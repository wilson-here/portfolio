import { agl, fcc, ftu } from "../assets/images";
import {
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  react,
  sass,
  tailwindcss,
  typescript,
  wordpress,
  prisma,
  php,
  sanity,
  ejs,
  jquery,
  photoshop,
  illustrator,
  xd,
  figma,
  netflix,
  shopease,
  swiftshare,
  pomodoro,
  quotemachine,
} from "../assets/icons";
import { FiPhone, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: ejs,
    name: " EJS",
    type: "Frontend",
  },
  {
    imageUrl: jquery,
    name: " jQuery",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: prisma,
    name: "Prisma",
    type: "Database",
  },
  {
    imageUrl: wordpress,
    name: " Wordpress",
    type: "CMS",
  },
  {
    imageUrl: sanity,
    name: " Sanity",
    type: "CMS",
  },
  {
    imageUrl: photoshop,
    name: "Adobe Photoshop",
    type: "Design Tool",
  },
  {
    imageUrl: illustrator,
    name: "Adobe Illustrator",
    type: "Design Tool",
  },
  {
    imageUrl: xd,
    name: "Adobe XD",
    type: "Design Tool",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design Tool",
  },
];

export const experiences = [
  {
    title: "Bachelor in International Business Economics",
    company_name: "Foreign Trade University",
    icon: ftu,
    iconBg: "rgba(192,32,37,0.2)",
    date: "Aug 2017 - May 2021",
    points: [
      "Leveraging an economics background to enhance frontend web development, brings analytical thinking, problem-solving, and business alignment to every project.",
    ],
  },
  {
    title: "LinkedIn Learning Certificate Holder",
    company_name: "LinkedIn Learning",
    icon: linkedin,
    iconBg: "rgba(2,136,209,0.2)",
    date: "Oct 2022 - Nov 2022",
    points: [
      <>
        Earned LinkedIn Learning certificates in{" "}
        <a
          href="https://www.linkedin.com/learning/certificates/ec3048d90d568b1c4263ae25eced0608a629288a7732e970582442574e0a6568?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BA7BkgkOqSua9Dp18x0x7ng%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          HTML Essential Training
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/learning/certificates/0c413dcabbad9f9150aa80c3be07f55e923cbd15ef6678cfe4a7f8392ddd2b85?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BA7BkgkOqSua9Dp18x0x7ng%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          CSS Essential Training
        </a>
        , and{" "}
        <a
          href="https://www.linkedin.com/learning/certificates/81bb9693061edd5b5578565a5203d70dcd6f466c9e81604b44b0c27328726c35?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BA7BkgkOqSua9Dp18x0x7ng%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          JavaScript Essential Training
        </a>
        , highlighting expertise in fundamental web development technologies.
      </>,
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Allgrow Labo",
    icon: agl,
    iconBg: "rgba(2,25,42,0.2)",
    date: "Dec 2022 - Jun 2023",
    points: [
      "Developed websites from design files (PSD, AI, FW, XD), ensuring pixel-perfect accuracy.",
      "Created W3C-compliant HTML, CSS, and JavaScript code.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Converted HTML templates into WordPress themes using Advanced Custom Fields (ACF) for enhanced customization.",
      "Continually enhanced website features based on client requests.",
    ],
  },
  {
    title: "freeCodeCamp Certificate Holder",
    company_name: "freeCodeCamp",
    icon: fcc,
    iconBg: "rgba(3,3,30,0.2)",
    date: "Jul 2023 - Present",
    points: [
      <>
        freeCodeCamp Certified in{" "}
        <a
          href="https://www.freecodecamp.org/certification/fcc60009b8d-bde6-4592-800f-bf1553886910/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Responsive Web Design
        </a>
        ,{" "}
        <a
          href="https://www.freecodecamp.org/certification/fcc60009b8d-bde6-4592-800f-bf1553886910/javascript-algorithms-and-data-structures"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          JavaScript Algorithms
        </a>
        , and{" "}
        <a
          href="https://www.freecodecamp.org/certification/fcc60009b8d-bde6-4592-800f-bf1553886910/front-end-development-libraries"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Front End Development Libraries
        </a>
        , showcasing proficiency in Algorithms and React.js.
      </>,
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: <FiGithub className="w-full h-full" />,
    link: "https://github.com/wilson-here",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin className="w-full h-full" />,
    link: "https://www.linkedin.com/in/quanganhha99/",
  },
  {
    name: "Email",
    icon: <FiMail className="w-full h-full" />,
    link: "quanganhha99@gmail.com",
  },
  {
    name: "Phone",
    icon: <FiPhone className="w-full h-full" />,
    link: "(+84) 91 951 7195",
  },
];

export const projects = [
  {
    iconUrl: netflix,
    theme: "btn-back-netflix",
    name: "Netflix (clone)",
    description:
      "Leveraging React.js and Next.js, this project mirrors the iconic Netflix interface. Explore movies, enjoy seamless navigation, and experience a dynamic streaming environment.",
    live: "https://wilson-here-netflix-clone.vercel.app/",
    github: "https://github.com/wilson-here/netflix-clone",
  },
  {
    iconUrl: swiftshare,
    theme: "btn-back-swiftshare",
    name: "Swift Share",
    description:
      "A social media web app where people can sign up, share their images, sort them into categories, and discover a wide variety of pictures shared by other users.",
    live: "https://wilson-here-swift-share.netlify.app/",
    github: "https://github.com/wilson-here/swift-share",
  },
  {
    iconUrl: shopease,
    theme: "btn-back-shopease",
    name: "Shop Ease",
    description:
      "An ecommerce site specializing in premium tech products such as headphones, speakers, and smartwatches, dedicated to delivering an elegant and refined shopping experience for customers.",
    live: "https://wilson-here-shop-ease.vercel.app/",
    github: "https://github.com/wilson-here/shop-ease",
  },
  {
    iconUrl: pomodoro,
    theme: "btn-back-pomodoro",
    name: "Pomodoro",
    description:
      "A Pomodoro web app with customizable timers and background music player enabling users to boost productivity through effective time management",
    live: "https://wilson-here-pomodoro.netlify.app/",
    github: "https://github.com/wilson-here/pomodoro",
  },
  {
    iconUrl: quotemachine,
    theme: "btn-back-quotemachine",
    name: "Quote Machine",
    description:
      "A quote machine web app, delivering daily inspiration with a click by displaying random quotes from a diverse collection of sources",
    live: "https://wilson-here-quote-machine.netlify.app/",
    github: "https://github.com/wilson-here/quote-machine",
  },
];
