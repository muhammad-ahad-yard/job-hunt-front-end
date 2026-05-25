import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative px-3">
        <img
          className="rounded-t-2xl h-52 w-full object-cover"
          src="./banner.jpg"
          alt="banner"
        />
        <img
          className="rounded-3xl bg-mine-shaft-950 p-2 w-36 h-36 border-8 -bottom-1/4 left-5 border-mine-shaft-950 absolute"
          src="./Google2.png"
          alt="profile pic"
        />
      </div>

      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="./avatar-9.png" />
            <Avatar src="./avatar-9.png" />
            <Avatar src="./avatar-9.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>
        <div className="flex gap-1 text-lg items-center text-mine-shaft-300">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> New York, USA
        </div>
      </div>

      <Divider my="xl" mx="xs" />

      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_button]:text-lg! mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400!">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about">
            <AboutComp />
          </Tabs.Panel>
          <Tabs.Panel value="jobs">
            <CompanyJobs />
          </Tabs.Panel>
          <Tabs.Panel value="employees">
            <CompanyEmployees />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
