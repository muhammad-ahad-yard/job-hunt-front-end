import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
  return (
    <div>
      <div className="flex justify-between bg-mine-shaft-900 items-center p-2 rounded-lg">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              src={`./${props.name}2.png`}
              className="h-7"
              alt={`./${props.name}2 Img`}
            />
          </div>
          <div>
            <div className="font-semibold text-mine-shaft-100">
              {props.name}
            </div>
            <div className="text-xs text-mine-shaft-300">
              {props.employees} Employees
            </div>
          </div>
        </div>

        <ActionIcon color="brightSun.4" variant="subtle">
          <IconExternalLink />
        </ActionIcon>
      </div>
    </div>
  );
};

export default CompanyCard;
