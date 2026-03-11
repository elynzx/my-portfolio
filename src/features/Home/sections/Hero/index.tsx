import ProfilePhoto from "@/assets/home/ProfilePhoto/Profile_02.png";
import HiIcon from "@/assets/home/hi.png";
import { Badge } from './components/Badge'
import { FaMedal, FaCertificate, FaUsers, FaReact, FaDocker } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiPython } from "react-icons/si";
import { StackIcon } from './components/StackIcon'

const about = {
  name: "Evelyn",
  role: "Full Stack Developer",
  title: "About",
  description:
    "Building clear, user-centered solutions with a balance of rigor and creativity.",
  images: {
    profile: ProfilePhoto,
    hi: HiIcon,
  },
};

const badges = [
  {
    icon: <FaMedal />,
    text: "Top 10% student"
  },
  {
    icon: <FaCertificate />,
    text: "English B2 certified"
  },
  /*   {
      icon: <FaUsers />,
      text: "IEEE WIE volunteer"
    }, */
]

const techStack = [
  { icon: <FaReact /> },
  { icon: <SiTypescript /> },
  { icon: <SiSpringboot /> },
  { icon: <SiPython /> },
  { icon: <FaDocker /> },
];


export const Hero = () => {
  return (
    <section
      className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 md:grid-rows-2 md:gap-2 md:px-10 items-center justify-center"
    >

      <div className="flex items-center text-xl gap-2 mt-3 justify-center md:mt-14 md:justify-start md:row-start-1 md:col-start-1">
        <img
          src={about.images.hi}
          alt={"Greeting from " + about.name}
          className="w-15 md:w-38 jello-vertical"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold md:text-4xl md:mb-5 text-darkPink">
          I'm {about.name}
          </h2>
          <span className="text-sm font-semibold md:text-4xl">{about.role}</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:row-span-2 md:col-start-2">
        <img
          src={about.images.profile}
          alt={"Profile photo of " + about.name}
          className="w-32 h-38 md:w-70 md:h-85 z-10 md:mb-6 object-cover"
        />
        <div className="flex flex-row gap-4 md:gap-7 mt-5 items-center justify-center">
          {techStack.map((tech, idx) => (
            <StackIcon key={idx} icon={tech.icon} />
          ))}
        </div>
      </div>

      <div className="flex flex-col text-justify items-center mt-4 gap-2 md:gap-5 md:mt-8 md:row-start-2 md:col-start-1">
        <p className="italic text-xs border-l-3 pl-3 text-white md:text-xl">{about.description}</p>
        <div className="flex flex-col gap-3 mt-4 md:flex-row md:gap-4">
          {badges.map((badge, idx) => (
            <Badge key={idx} icon={badge.icon} text={badge.text} />
          ))}
        </div>
      </div>
    </section>
  );
};
