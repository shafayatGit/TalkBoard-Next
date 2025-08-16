import Image from "next/image";
import React from "react";
import { assets } from "../Assets/assets";
import { PiGitlabLogoSimpleBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <div className="text-white inline-flex items-center gap-1 text-xl sm:text-3xl">
        <PiGitlabLogoSimpleBold />
        <h1 className="font-bold">TalkBoard</h1>
      </div>
      <p className="text-sm text-white">All right reserved. Copyright @TalkBoard</p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="" width={40}/>
        <Image src={assets.twitter_icon} alt="" width={40}/>
        <Image src={assets.googleplus_icon} alt="" width={40}/>
        {/* <Image src={assets.facebook_icon} alt="" width={40}/> */}
      </div>
    </div>
  );
};

export default Footer;
