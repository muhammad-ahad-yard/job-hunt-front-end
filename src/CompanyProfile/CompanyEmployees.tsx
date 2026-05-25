import { talents } from "../Data/Data";
import TalentCard from "../FindTalent/TalentCard";

const CompanyEmployees = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-10">
      {talents.map((talent, i) => i < 6 && <TalentCard key={i} {...talent} />)}
    </div>
  );
};

export default CompanyEmployees;
