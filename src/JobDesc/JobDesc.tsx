import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { card, desc, skills } from "../Data/Data";

const JobDesc = (props: any) => {
  const data = DOMPurify.sanitize(desc);

  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img src={`./Google2.png`} className="h-14" alt={`./2 Img`} />
          </div>
          <div>
            <div className="font-semibold text-2xl text-mine-shaft-100">
              Software Engineer
            </div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &#x2022; 48 Applicants
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button color="brightSun.7" variant="light" size="sm">
              {props.edit ? "Edit" : "Apply"}
            </Button>
          </Link>
          {props.edit ? (
            <Button color="red.5" variant="outline" size="sm">
              Delete
            </Button>
          ) : (
            <IconBookmark className="text-bright-sun-400 cursor-pointer" />
          )}
        </div>
      </div>
      <Divider my="xl" />

      <div className="flex justify-between">
        {card.map((item: any, i: number) => (
          <div key={i} className="flex flex-col gap-1 items-center">
            <ActionIcon
              variant="light"
              radius="xl"
              className="h-12! w-12!"
              color="brightSun.6"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>

      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((item: any, i: number) => (
            <ActionIcon
              variant="light"
              radius="xl"
              className="h-fit! w-fit! font-medium text-sm!"
              color="brightSun.6"
              p="xs"
              key={i}
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>

      <Divider my="xl" />

      <div
        className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify **:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img
                src={`./Google2.png`}
                className="h-8"
                alt={`./Google2 Img`}
              />
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-lg text-mine-shaft-100">
                Google
              </div>
              <div className="text-mine-shaft-300">10K+ Employees</div>
            </div>
          </div>

          <Link to="/company">
            <Button color="brightSun.7" variant="light">
              Company Page
            </Button>
          </Link>
        </div>

        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ab?
          Fugit, cupiditate nemo laudantium iure voluptatibus est a non labore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          nesciunt!
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
