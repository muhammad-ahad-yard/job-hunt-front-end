import { work } from "../Data/Data";
import { Avatar } from "@mantine/core";

const Working = () => {
  return (
    <div className="mt-14 pb-5">
      <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
        How it <span className="text-bright-sun-400">Works</span>
      </div>

      <div className="text-lg text-center mb-10 mx-auto w-1/2 text-mine-shaft-300">
        Effortlessly navigate through the process and land your dream job.
      </div>

      <div className="flex px-16 justify-between items-center">
        <div className="relative">
          <img className="w-120" src="Girl.png" alt="girl" />
          <div className="w-36 absolute top-[15%] right-0 flex flex-col items-center gap-1 backdrop-blur-md rounded-xl py-3 px-1 border border-bright-sun-400">
            <Avatar className="h-16! w-16!" src="avatar1.png" alt="it's me" />
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% Completed</div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {work.map((item, i) => (
            <div className="flex items-center gap-4" key={i}>
              <div className="p-2.5 bg-bright-sun-300 rounded-full">
                <img
                  className="h-12 w-12"
                  src={`${item.path}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
