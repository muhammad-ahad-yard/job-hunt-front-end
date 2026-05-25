import { Divider, RangeSlider } from "@mantine/core";
import { dropDownData } from "../Data/Data";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8">
      {dropDownData.map((item, i) => (
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
