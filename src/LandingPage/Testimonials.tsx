import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-14 pb-5">
      <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
        What <span className="text-bright-sun-400">User</span> says about us
      </div>

      <div className="flex justify-evenly">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 w-[23%] border-bright-sun-400 p-3 mt-10 rounded-xl border"
          >
            <div className="flex gap-2 items-center">
              <Avatar className="h-14! w-14!" src="avatar-9.png" alt="avatar" />
              <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">
                  {item.name}
                </div>
                <Rating value={item.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-xs text-mine-shaft-300">
              {item.testimonial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
