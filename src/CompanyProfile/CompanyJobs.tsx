import { jobList } from "../Data/Data";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-1">
      {jobList.map((job, i) => (
        <JobCard key={i} {...job} />
      ))}
    </div>
  );
};

export default CompanyJobs;
