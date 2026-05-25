import { Indicator } from "@mantine/core";
import { IconBell, IconSettings, IconBow } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();

  return location.pathname !== "/signup" && location.pathname !== "/login" ? (
    <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between items-center px-6">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconBow stroke={2.5} className="h-8 w-8" />
        <div className="text-3xl font-semibold">JobHunt</div>
      </div>

      <NavLinks />

      <div className="flex gap-5 items-center">
        <ProfileMenu />
        <div className="bg-mine-shaft-900 p-1 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full">
          <Indicator color="brightSun.4" offset={6} size={8} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
