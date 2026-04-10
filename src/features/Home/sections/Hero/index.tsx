import ProfilePhoto from "@/assets/home/ProfilePhoto/Profile_02.png";
import HiIcon from "@/assets/home/hi.png";
import { Badge } from './components/Badge'
import { FaMedal, FaCertificate, FaReact, FaDocker } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiPython } from "react-icons/si";
import { StackIcon } from './components/StackIcon'

const about = {
  name: "Evelyn",
  role: "Full Stack Developer Trainee",
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
    <section className="flex flex-col items-center justify-center w-full h-full">
      <div className="grid grid-cols-1 md:px-12 md:grid-rows-3 md:grid-cols-3 w-full h-full items-center justify-items-center md:justify-items-stretch">

        <div className="col-span-1 flex items-center justify-center md:justify-start md:mt-16 w-full md:col-span-2 md:col-start-1 md:row-span-1">
          <div className="flex items-center text-xl gap-2 md:justify-start md:items-center">
            <img
              src={about.images.hi}
              alt={"Greeting from " + about.name}
              className="w-15 md:w-42 jello-vertical"
            />
            <div className="flex flex-col ">
              <h2 className="text-lg font-semibold md:text-3xl md:mb-5 text-darkPink">
                I'm {about.name}
              </h2>
              <span className="text-sm md:text-2xl ">{about.role}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-5 md:gap-4 md:row-span-3 md:col-start-3">
          <img
            src={about.images.profile}
            alt={"Profile photo of " + about.name}
            className="w-28 h-auto md:w-60 md:h-75 object-cover"
          />
          <div className="flex flex-row gap-4 md:gap-7 mt-5 items-center justify-center">
            {techStack.map((tech, idx) => (
              <StackIcon key={idx} icon={tech.icon} />
            ))}
          </div>
        </div>

        <div className="col-span-1 items-center justify-center md:pl-5 md:mt-12 md:justify-between md:row-start-2 md:row-span-2 md:col-start-1 md:col-span-2 w-full">
          <div className="flex flex-col gap-2 md:w-120 ">
            <p className="italic text-xs w-full border-l-3 pl-3 text-white md:text-lg">{about.description}</p>
            <div className="flex flex-col gap-3 mt-3 md:flex-row md:w-115 md:mt-10">
              {badges.map((badge, idx) => (
                <Badge key={idx} icon={badge.icon} text={badge.text} />
              ))}
            </div>
          </div>
        </div>

      </div >
    </section>
  );
};
