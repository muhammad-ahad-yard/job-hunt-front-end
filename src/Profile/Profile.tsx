import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import { field, profile } from "../Data/Data";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile = () => {
  const [skills, setSkills] = useState([
    "React",
    "Spring Boot",
    "Java",
    "Python",
    "Node.js",
    "MongoDB",
    "Express",
    "Django",
    "PostgreSQL",
  ]);

  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(
    "Passionate frontend developer with 3+ years of experience building responsive web applications. Proficient in React, TypeScript, and modern CSS frameworks. Love creating beautiful and intuitive user interfaces.",
  );
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);

  const handleEdit = (i: any) => {
    const newEdit = [...edit];
    newEdit[i] = !newEdit[i];
    setEdit(newEdit);
  };

  return (
    <div className="w-4/5 mx-auto mt-5">
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
          John Alia{" "}
          <ActionIcon
            variant="subtle"
            onClick={() => handleEdit(0)}
            color="brightSun.4"
            size="lg"
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 *:w-1/2">
              <SelectInput {...field[0]} />
              <SelectInput {...field[1]} />
            </div>
            <SelectInput {...field[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center">
              <IconBriefcase className="h-5 w-5" stroke={1.5} />
              Software Engineer &bull; Google
            </div>
            <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
              <IconMapPin stroke={1.5} className="h-5 w-5" /> New York, USA
            </div>
          </>
        )}
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About{" "}
          <ActionIcon
            variant="subtle"
            onClick={() => handleEdit(1)}
            color="brightSun.4"
            size="lg"
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            value={about}
            onChange={(e) => setAbout(e.currentTarget.value)}
            autosize
            minRows={3}
            placeholder="Enter about yourself..."
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {about}
          </div>
        )}
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            variant="subtle"
            onClick={() => handleEdit(2)}
            color="brightSun.4"
            size="lg"
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            placeholder="Add Skill"
            value={skills}
            onChange={setSkills}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills?.map((skill: any, i: any) => (
              <div
                key={i}
                className="bg-bright-sun-900 px-3 py-1 text-sm font-medium rounded-3xl text-bright-sun-300"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <div className="flex gap-2">
            <ActionIcon
              variant="subtle"
              onClick={() => setAddExp(true)}
              color="brightSun.4"
              size="lg"
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              onClick={() => handleEdit(3)}
              color="brightSun.4"
              size="lg"
            >
              {edit[3] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {profile.experience?.map((exp: any, i: any) => (
            <ExpCard key={i} {...exp} edit={edit[3]} />
          ))}
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>

      <Divider my="xl" mx="xs" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certifications{" "}
          <div className="flex gap-2">
            <ActionIcon
              variant="subtle"
              onClick={() => setAddCerti(true)}
              color="brightSun.4"
              size="lg"
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              onClick={() => handleEdit(4)}
              color="brightSun.4"
              size="lg"
            >
              {edit[4] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {profile.certifications?.map((certi: any, i: any) => (
            <CertiCard key={i} {...certi} edit={edit[4]} />
          ))}
          {addCerti && <CertiInput setEdit={setAddCerti} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
