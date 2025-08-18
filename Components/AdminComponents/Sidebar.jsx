import Image from "next/image";
import React from "react";
import { assets } from "../../Assets/assets";
import { PiGitlabLogoSimpleBold } from "react-icons/pi";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-slate-100 ">
      <div className="px-2 h-[100vh] py-3 border border-black ">
        <Link href={"/"}>
          <div className="cursor-pointer inline-flex items-center border-b  gap-1 text-2xl sm:text-5xl">
            <PiGitlabLogoSimpleBold />
            <h1 className="font-bold">TalkBoard</h1>
          </div>
        </Link>
        <div className=" h-[100vw] relative ">
          <div className="w-[90%] mt-10 flex flex-col gap-5 sm:w-[80%] absolute right-0">
            <Link href={"/admin/addBlog"}>
              <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[0px_10px_10px_#000000]">
                <Image src={assets.add_icon} alt="" width={28} />
                <p>Add Blogs</p>
              </div>
            </Link>
            <Link href={"/admin/blogList"}>
              <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[0px_10px_10px_#000000]">
                <Image src={assets.blog_icon} alt="" width={28} />
                <p>Blog List</p>
              </div>
            </Link>
            <Link href={"/admin/subscriptions"}>
              <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[0px_10px_10px_#000000]">
                <Image src={assets.email_icon} alt="" width={28} />
                <p>Subscription</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
