import { talents } from "../Data/Data";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = () => {
  return (
    <div className="px-2">
      <div className="text-xl font-semibold mb-5">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-5">
        {talents.map(
          (talent, i) => i < 4 && <TalentCard key={i} {...talent} />,
        )}
      </div>
    </div>
  );
};

export default RecommendTalent;
