import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

const Navibar = () => {
  return (
    <header className="w-full">
      <div className="w-full max-w-[1280px] h-[90px] flex justify-between items-center m-auto md:px-4 px-2">
        {/* logo ---->  */}
        <Link
          href="/"
          className="text-[38px] text-yellow-main font-black font-incon"
        >
          Logo
        </Link>
        {/* social links ------> */}
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((item, index) => {
            return (
              <div className="w-[40px] h-[40px] bg-white hover:opacity-80 rounded-full flex justify-center items-center hover:scale-110 transform duration-200 ease-in-out">
                <Link href={item.path} key={index}>
                  {item.icon}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

const socialLinks = [
  {
    path: "#",
    icon: <FaTwitter className="text-[26px] text-black" />,
  },
  {
    path: "#",
    icon: <BiLogoDiscordAlt className="text-[26px] text-black" />,
  },
  {
    path: "#",
    icon: <MdEmail className="text-[26px] text-black" />,
  },
  {
    path: "#",
    icon: <VscGithubInverted className="text-[26px] text-black" />,
  },
];

export default Navibar;
