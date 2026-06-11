import { Button, Checkbox, Textarea } from "@mantine/core";
import { field } from "../Data/Data";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = field;
  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces",
  );
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </div>
      <div className="flex gap-10 *:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        value={desc}
        onChange={(e) => setDesc(e.currentTarget.value)}
        autosize
        minRows={3}
        placeholder="Enter Summary..."
        label="Summary"
        withAsterisk
      />
      <div className="flex gap-10 *:w-1/2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Pick date"
          value={startDate}
          onChange={(val: Date | string | null) =>
            setStartDate(
              val ? (val instanceof Date ? val : new Date(val)) : null,
            )
          }
          maxDate={endDate || undefined}
          withAsterisk
        />
        <MonthPickerInput
          label="End Date"
          placeholder="Pick date"
          value={endDate}
          onChange={(val: Date | string | null) =>
            setEndDate(val ? (val instanceof Date ? val : new Date(val)) : null)
          }
          maxDate={new Date()}
          minDate={startDate || undefined}
          withAsterisk
          disabled={checked}
        />
      </div>
      <Checkbox
        autoContrast
        label="Currently working here"
        checked={checked}
        onChange={(e) => setChecked(e.currentTarget.checked)}
      />
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

export default ExpInput;
