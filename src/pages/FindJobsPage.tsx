import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";

const FindJobsPage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider mx="md" size="xs" />
      <Jobs />
    </div>
  );
};

export default FindJobsPage;
