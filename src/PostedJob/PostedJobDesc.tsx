import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";
import { talents } from "../Data/Data";

const PostedJobDesc = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{" "}
        <Badge variant="light" size="xs" ml="sm" color="brightSun.7">
          Badge
        </Badge>
      </div>

      <div className="font-medium text-mine-shaft-200 mb-5">
        New York, United States
      </div>

      <div>
        <Tabs variant="outline" radius="lg" defaultValue="overview">
          <Tabs.List className="[&_button]:text-lg! mb-5 font-semibold [&_button[data-active='true']]:text-bright-sun-400!">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="mt-10 flex flex-wrap gap-5">
              {talents.map(
                (talent, i) =>
                  i < 6 && <TalentCard key={i} {...talent} posted />,
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="mt-10 flex flex-wrap gap-5 justify-around">
              {talents.map(
                (talent, i) =>
                  i < 6 && <TalentCard key={i} {...talent} invited />,
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDesc;
