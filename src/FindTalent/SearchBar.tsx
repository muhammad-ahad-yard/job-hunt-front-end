import { useState } from "react";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { searchFields } from "../Data/Data";
import MultiInput from "../FindJobs/MultiInput";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8 items-center text-mine-shaft-100!">
      <div className="flex items-center">
        <div className="text-bright-sun-400 bg-mine-shaft-900 p-1 mr-2 rounded-full">
          <IconUserCircle size={20} />
        </div>
        <Input
          className="[&_input]:placeholder-mine-shaft-300!"
          placeholder="Talent Name"
          variant="unstyled"
        />
        <Divider mr="xs" size="sm" orientation="vertical" />
      </div>
      {searchFields.map((item, i) => (
        <>
          <div key={i} className="w-1/5">
            <MultiInput {...item} />
          </div>
          <Divider mr="xs" size="sm" orientation="vertical" />
        </>
      ))}

      <div className="w-1/5">
        <div className="flex justify-between gap-1 text-sm">
          <div>Salary</div>
          <div>
            Rs. {value[0]} LPA - Rs. {value[1]} LPA
          </div>
        </div>
        <RangeSlider
          size="xs"
          color="brightSun.4"
          value={value}
          onChange={setValue}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
