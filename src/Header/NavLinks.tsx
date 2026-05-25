import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();

  const links = [
    { name: "Find Job", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job" },
    { name: "Posted Job", url: "/posted-job" },
    { name: "Job History", url: "/job-history" },
    { name: "SignUp", url: "/signup" },
  ];

  return (
    <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {links.map((link, i) => (
        <div
          className={`${location.pathname === link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full flex items-center`}
          key={i}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
