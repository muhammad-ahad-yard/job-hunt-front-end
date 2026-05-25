import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>

      <div className="text-lg text-center mb-10 mx-auto w-1/2 text-mine-shaft-300">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today.
      </div>

      <Carousel
        slideSize="22%"
        slideGap="md"
        emblaOptions={{ loop: true }}
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
        className="[&_button]:bg-bright-sun-400! [&_button]:border-none!  [&_button]:opacity-0 hover:[&_button]:opacity-100"
      >
        {jobCategory.map((category, i) => (
          <Carousel.Slide key={i}>
            <div className="flex flex-col items-center my-5 transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] shadow-bright-sun-300! p-5 rounded-xl w-64 gap-2 border border-bright-sun-400">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {category.name}
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.description}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {category.jobs}+ new jobs posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
