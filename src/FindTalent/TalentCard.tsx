import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-mine-shaft-900 hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400! p-4 w-85 transition  duration-300 ease-in-out flex flex-col gap-3 rounded-xl">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar
              src={`./${props.img}.png`}
              size={"lg"}
              className="h-7"
              alt={`${props.img} img`}
            />
          </div>
          <div>
            <div className="text-mine-shaft-100 font-semibold text-lg">
              {props.name}
            </div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &bull; {props.company}
            </div>
          </div>
        </div>
        <div>
          <IconHeart className="text-mine-shaft-300 cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-2 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800">
        {props.topSkills?.map((skill: any, i: any) => (
          <div key={i}>{skill}</div>
        ))}
      </div>

      <Text
        lineClamp={3}
        className="text-xs! text-mine-shaft-300! text-justify"
      >
        {props.about}
      </Text>

      <Divider size="xs" color="mineShaft.7" />

      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview: August 27, 2020 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between text-mine-shaft-400">
          <div className="font-semibold text-mine-shaft-200">
            {props.expectedCtc}
          </div>
          <div className="flex gap-1 text-xs items-center">
            <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
          </div>
        </div>
      )}

      <Divider size="xs" color="mineShaft.7" />

      <div className="flex *:w-1/2 *:p-1">
        {!props.invited && (
          <>
            <Link to="/talent-profile">
              <Button color="brightSun.6" fullWidth variant="outline">
                Profile
              </Button>
            </Link>
            <div>
              {props.posted ? (
                <Button
                  color="brightSun.6"
                  fullWidth
                  variant="light"
                  onClick={open}
                  rightSection={<IconCalendarMonth className="w-4 h-4" />}
                >
                  Schedule
                </Button>
              ) : (
                <Button color="brightSun.6" fullWidth variant="light">
                  Message
                </Button>
              )}
            </div>
          </>
        )}

        {props.invited && (
          <>
            <div>
              <Button color="brightSun.6" fullWidth variant="outline">
                Accept
              </Button>
            </div>
            <div>
              <Button color="brightSun.6" fullWidth variant="light">
                Reject
              </Button>
            </div>
          </>
        )}
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
            minDate={new Date()}
          />
          <TimeInput
            label="Time"
            onClick={() => ref.current?.showPicker()}
            ref={ref}
          />
          <Button color="brightSun.7" fullWidth variant="light">
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
