import { jobList } from "../Data/Data";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort />
      </div>

      <div className="mt-10 flex flex-wrap gap-5 justify-around">
        {jobList.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
