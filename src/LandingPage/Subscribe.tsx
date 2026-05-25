import { TextInput, Button } from "@mantine/core";

const Subscribe = () => {
  return (
    <div className="mt-14 flex items-center justify-around mx-20 py-3 rounded-xl bg-mine-shaft-900">
      <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100">
        Never Wants to miss any{" "}
        <span className="text-bright-sun-400">Job News!</span>
      </div>

      <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
        <TextInput
          placeholder="Your@email.com"
          variant="unstyled"
          size="xl"
          className="[&_input]:text-mine-shaft-100 font-semibold"
        />
        <Button
          className="rounded-lg!"
          color="brightSun.5"
          size="xl"
          variant="filled"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
