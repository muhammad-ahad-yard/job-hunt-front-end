import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        label="Email"
        placeholder="Your Email"
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
      />
      <PasswordInput
        label="Password"
        placeholder="Password"
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        }
      />
      <Button variant="filled" autoContrast>
        Sign up
      </Button>
      <div className="mx-auto">
        Dont't have an account?{" "}
        <Link to="/signup" className="text-bright-sun-400 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
