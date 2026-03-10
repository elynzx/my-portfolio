import ProfilePhoto from "@/assets/home/ProfilePhoto/Profile_01.png";
import HiIcon from "@/assets/home/hi.png";
import { Badge } from './components/Badge'

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

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6">
      <div className="flex flex-col text-xl md:flex-row md:items-end ">
        <img
          src={about.images.hi}
          alt={"Greeting from " + about.name}
          className="w-20 md:w-32 jello-vertical"
        />
        <h2 className="text-xl font-semibold md:text-4xl md:mb-5 md:ml-2 text-darkPink">
          I'm {about.name}
        </h2>
      </div>
      <span className="text-lg font-semibold md:text-4xl ">{about.role}</span>
      <img
        src={about.images.profile}
        alt={"Profile photo of " + about.name}
        className="h-auto w-40 md:w-90 z-10 md:mb-6"
      />
      <div className="flex text-justify items-center flex-col mt-4 md:mt-0 md:flex-row md:mb-16">
        <p className="md:text-[17px] md:mr-28">{about.description}</p>
        <div className="">
          <Badge />
        </div>
      </div>
    </section>
  );
};
