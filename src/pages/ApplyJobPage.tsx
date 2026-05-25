import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link to="/jobs" className="my-2 inline-block p-4">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
          color="brightSun.7"
        >
          Back
        </Button>
      </Link>

      <ApplyJobComp />
    </div>
  );
};

export default ApplyJobPage;
