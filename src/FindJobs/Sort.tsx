import { Combobox, useCombobox } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";
import { useState } from "react";

const opt = [
  "Relevance",
  "Monst Recent",
  "Salary (Low to Hight)",
  "Salary (High to Low)",
];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option value={item} key={item} className="text-xs">
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      width={150}
      position="bottom-start"
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <div
          onClick={() => combobox.toggleDropdown()}
          className="border border-bright-sun-400 cursor-pointer gap-2 text-sm flex items-center py-1 rounded-xl px-2"
        >
          {selectedItem}{" "}
          <IconAdjustments className="text-bright-sun-400 h-5 w-5" />
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default Sort;
