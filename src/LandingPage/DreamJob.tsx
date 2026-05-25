import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>dream job</span> with us
        </div>
        <div className="text-lg text-mine-shaft-200">
          Good life begins with a good company. Start exploring thousands of
          jobs in one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            label="Job Title"
            variant="unstyled"
            placeholder="Software Engineer"
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100!"
          />
          <TextInput
            label="Job Type"
            variant="unstyled"
            placeholder="Full time"
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100!"
          />
          <div className="flex items-center justify-center cursor-pointer h-full hover:bg-bright-sun-700 w-20 p-2 rounded-lg text-mine-shaft-100 bg-bright-sun-600">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>

      <div className="w-[55%] flex items-center justify-center">
        <div className="w-120 relative">
          <img src="Boy.png" alt="boy" />
          <div className="w-fit absolute top-[50%] -right-10 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">
              10k+ got job
            </div>
            <Avatar.Group>
              <Avatar src="avatar-9.png" />
              <Avatar src="avatar-9.png" />
              <Avatar src="avatar-9.png" />
              <Avatar>+5</Avatar>
            </Avatar.Group>
          </div>
          <div className="w-fit absolute top-[28%] -left-5 flex flex-col gap-2 border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="google.png" alt="google" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
              </div>
            </div>
            <div className="flex gap-2 justify-around mt-2 text-mine-shaft-200 text-xs">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
