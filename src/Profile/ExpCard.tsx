import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

const ExpCard = (props: any) => {
  const [edit, setEdit] = useState(true);
  return edit ? (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              src={`./${props.company}2.png`}
              className="h-7"
              alt={`./${props.company}2 Img`}
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-mine-shaft-100">
              {props.title}
            </div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &#x2022; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          {props.startDate} - {props.endDate}
        </div>
      </div>

      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>

      {props.edit && (
        <div className="flex gap-5">
          <Button
            onClick={() => setEdit(false)}
            color="brightSun.4"
            variant="outline"
          >
            Edit
          </Button>
          <Button color="red.4" variant="outline">
            Delete
          </Button>
        </div>
      )}
    </div>
  ) : (
    <ExpInput setEdit={setEdit} />
  );
};

export default ExpCard;
