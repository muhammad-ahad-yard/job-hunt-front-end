import {
  IconBow,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return location.pathname !== "/signup" && location.pathname !== "/login" ? (
    <div className="pt-14 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center text-bright-sun-400">
          <IconBow stroke={2.5} className="h-6 w-6" />
          <div className="text-3xl font-semibold">JobHunt</div>
        </div>

        <div className="text-sm text-mine-shaft-300">
          Job portal with user profiles, skill updates, certifications, work
          experience and admin job postings.
        </div>

        <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer">
          <div className="hover:bg-mine-shaft-700">
            <IconBrandFacebook />
          </div>
          <div className="hover:bg-mine-shaft-700">
            <IconBrandInstagram />
          </div>
          <div className="hover:bg-mine-shaft-700">
            <IconBrandX />
          </div>
        </div>
      </div>

      {footerLinks.map((item, i) => (
        <div key={i}>
          <div className="text-lg font-semibold mb-4 text-bright-sun-400">
            {item.title}
          </div>
          {item.links.map((link, idx) => (
            <div
              className="text-mist-300 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer transition duration-300 ease-in-out hover:translate-x-2"
              key={idx}
            >
              {link}
            </div>
          ))}
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Footer;
