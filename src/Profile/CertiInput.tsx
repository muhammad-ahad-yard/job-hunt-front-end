import { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import { field } from "../Data/Data";
import { MonthPickerInput } from "@mantine/dates";

const CertiInput = (props: any) => {
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 *:w-1/2">
        <TextInput placeholder="Enter Title" withAsterisk label="Title" />
        <SelectInput {...field[1]} />
      </div>
      <div className="flex gap-10 *:w-1/2">
        <MonthPickerInput
          label="Issue Date"
          placeholder="Pick date"
          value={issueDate}
          onChange={(val: Date | string | null) =>
            setIssueDate(
              val ? (val instanceof Date ? val : new Date(val)) : null,
            )
          }
          maxDate={new Date()}
          withAsterisk
        />
        <TextInput placeholder="Enter ID" withAsterisk label="Certificate Id" />
      </div>
      <div className="flex gap-5">
        <Button
          onClick={() => props.setEdit(false)}
          color="brightSun.4"
          variant="outline"
        >
          Save
        </Button>
        <Button
          color="red.4"
          variant="outline"
          onClick={() => props.setEdit(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
