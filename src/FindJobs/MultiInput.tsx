import { MultiSelect } from "@mantine/core";
import { IconSelector } from "@tabler/icons-react";

const MultiInput = (props: any) => {
  return (
    <MultiSelect
      placeholder={props.title}
      data={props.options}
      variant="unstyled"
      searchable
      className="[&_input]:placeholder-mine-shaft-300!"
      nothingFoundMessage="Nothing found..."
      leftSection={
        <div className="text-bright-sun-400 rounded-full mr-1 p-1 bg-mine-shaft-900">
          <props.icon />
        </div>
      }
      rightSection={<IconSelector />}
    />
  );
};

export default MultiInput;
