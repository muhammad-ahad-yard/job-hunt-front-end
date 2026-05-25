import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile = (props: any) => {
  return (
    <div className="w-2/3">
      <div className="relative px-3">
        <img
          className="rounded-t-2xl h-52 w-full object-cover"
          src="./banner.jpg"
          alt="banner"
        />
        <img
          className="rounded-full w-48 h-48 border-8 -bottom-1/3 left-3 border-mine-shaft-950 absolute"
          src="./avatar-9.png"
          alt="profile pic"
        />
      </div>

      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}{" "}
          <Button variant="light" color="brightSun.6">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {props.role} &bull; {props.company}
        </div>
        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
        </div>
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills?.map((skill: any, i: any) => (
            <div
              key={i}
              className="bg-bright-sun-900 px-3 py-1 text-sm font-medium rounded-3xl text-bright-sun-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experience?.map((exp: any, i: any) => (
            <ExpCard key={i} {...exp} />
          ))}
        </div>
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-8">
          {props.certifications?.map((certi: any, i: any) => (
            <CertiCard key={i} {...certi} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
