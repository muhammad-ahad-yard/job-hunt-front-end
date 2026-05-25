import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";

const JobDescPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link to="/find-jobs" className="my-2 inline-block p-4">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
          color="brightSun.7"
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-5 justify-around">
        <JobDesc />
        <RecommendedJobs />
      </div>
    </div>
  );
};

export default JobDescPage;
