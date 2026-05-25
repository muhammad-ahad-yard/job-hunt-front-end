import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/Data";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
      <Link to="/find-talent" className="my-2 inline-block p-4">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
          color="brightSun.7"
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-5">
        <Profile {...profile} />
        <RecommendTalent />
      </div>
    </div>
  );
};

export default TalentProfilePage;
