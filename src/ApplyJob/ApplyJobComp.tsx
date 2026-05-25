import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    const i = setInterval(() => {
      x--;
      setSec(x);
      if (x === 0) {
        navigate("/find-jobs");
        clearInterval(i);
      }
    }, 1000);
  };

  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "brightSun.4", type: "bars" }}
          className="fixed!"
        />
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img src={`./Google2.png`} className="h-14" alt={`./2 Img`} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-2xl text-mine-shaft-100">
                Software Engineer
              </div>
              <div className="text-lg text-mine-shaft-300">
                Google &bull; 3 days ago &#x2022; 48 Applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my="xl" />

        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 *:w-1/2">
            <TextInput
              label="Full Name"
              placeholder="Enter Name"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            />
            <TextInput
              label="Email"
              placeholder="Enter Email"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            />
          </div>
          <div className="flex gap-10 *:w-1/2">
            <NumberInput
              label="Phone Number"
              placeholder="Enter Phone Number"
              withAsterisk
              hideControls
              min={0}
              max={99999999999}
              clampBehavior="strict"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            />
            <TextInput
              label="Personal Website"
              placeholder="Enter Url"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            />
          </div>
          <FileInput
            label="Attach Your CV"
            placeholder="Your CV"
            withAsterisk
            leftSection={<IconPaperclip stroke={1.5} />}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          />
          <Textarea
            label="Cover Letter"
            placeholder="Type something about yourself..."
            autosize
            withAsterisk
            minRows={4}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
          />
          {!preview && (
            <Button color="brightSun.7" variant="light" onClick={handlePreview}>
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 *:w-1/2">
              <Button
                color="brightSun.7"
                variant="outline"
                onClick={handlePreview}
                fullWidth
              >
                Edit
              </Button>
              <Button
                color="brightSun.7"
                variant="light"
                onClick={handleSubmit}
                fullWidth
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted!"
        mt="md"
        withCloseButton={false}
        withBorder
        className={`border-bright-sun-500! fixed! top-0 left-[35%] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-25"} z-1001`}
      >
        Redirecting to Find Jobs in {sec} seconds
      </Notification>
    </>
  );
};

export default ApplyJobComp;
