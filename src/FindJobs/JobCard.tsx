import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const JobCard = (props: any) => {
  return (
    <Link
      to="/jobs"
      className="bg-mine-shaft-900 transition  duration-300 ease-in-out hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400! p-4 w-88 flex flex-col gap-3 rounded-xl"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              src={`./${props.company}2.png`}
              className="h-7"
              alt={`./${props.company}2 Img`}
            />
          </div>
          <div>
            <div className="font-semibold text-mine-shaft-100">
              {props.jobTitle}
            </div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>

        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
      </div>

      <div className="flex gap-2 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      <Text
        lineClamp={3}
        className="text-xs! text-mine-shaft-300! text-justify"
      >
        {props.description}
      </Text>

      <Divider size="xs" color="mineShaft.7" />

      <div className="flex justify-between text-mine-shaft-400">
        <div className="font-semibold text-mine-shaft-200">
          Rs. {props.package}
        </div>
        <div className="flex gap-1 text-xs items-center">
          <IconClockHour3 stroke={1.5} className="h-5 w-5" />{" "}
          {props.postedDaysAgo} days ago
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
