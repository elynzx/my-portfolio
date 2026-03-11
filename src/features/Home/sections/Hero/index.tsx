import ProfilePhoto from "@/assets/home/ProfilePhoto/Profile_01.png";
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
  {
    icon: <FaUsers />,
    text: "IEEE WIE volunteer"
  },
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
    <section className="flex flex-col items-center justify-center p-6">
      <div className="flex items-center text-xl gap-2 md:flex-row md:items-end ">
        <img
          src={about.images.hi}
          alt={"Greeting from " + about.name}
          className="w-15 md:w-32 jello-vertical"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold md:text-4xl md:mb-5 md:ml-2 text-darkPink">
            I'm {about.name}
          </h2>
          <span className="text-sm font-semibold md:text-4xl ">{about.role}</span>
        </div>
      </div>
      <img
        src={about.images.profile}
        alt={"Profile photo of " + about.name}
        className="h-auto w-40 rounded-full md:w-90 z-10 md:mb-6"
      />

      <div className="flex flex-row gap-4 mt-6 items-center justify-center">
        {techStack.map((tech, idx) => (
          <StackIcon key={idx} icon={tech.icon} />
        ))}
      </div>

      <div className="flex text-justify items-center flex-col mt-6 gap-2 md:mt-0 md:flex-row md:mb-16">
        <p className="italic border-l-4 pl-2 text-white md:text-[17px] md:mr-28">{about.description}</p>
        <div className="flex flex-col gap-3 mt-4">
          {badges.map((badge, idx) => (
            <Badge key={idx} icon={badge.icon} text={badge.text} />
          ))}
        </div>
      </div>
    </section>
  );
};
