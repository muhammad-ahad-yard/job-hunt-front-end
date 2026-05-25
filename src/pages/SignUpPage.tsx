import { IconBow } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
      <div
        className={`w-screen h-screen flex *:shrink-0 transition ease-in-out duration-1000 ${location.pathname == "/signup" ? "-translate-x-1/2" : "translate-x-0"}`}
      >
        <Login />
        <div
          className={`w-1/2 h-full transition-all ease-in-out duration-1000 ${location.pathname == "/signup" ? "rounded-r-[200px]" : "rounded-l-[200px]"} bg-mine-shaft-900 flex gap-3 flex-col items-center justify-center`}
        >
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconBow stroke={2.5} className="h-16 w-16" />
            <div className="text-6xl font-semibold">JobHunt</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Find the job made for you
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
