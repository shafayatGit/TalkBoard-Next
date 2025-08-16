"use client";
import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../Assets/assets";
import Image from "next/image";
import { PiGitlabLogoSimpleBold } from "react-icons/pi";

export default function page({ params }) {
  const [data, setData] = useState(null);
  const p =params;

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(p.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <div className="text-black inline-flex items-center gap-1 text-xl sm:text-3xl">
          <PiGitlabLogoSimpleBold />
          <h1 className="font-bold">TalkBoard</h1>
        </div>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border  border-solid border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[0px_10px_10px_#000000] hover:rounded-2xl transform transition duration-300 hover:scale-110">
          Get Started <Image src={assets.arrow} alt="arrow"></Image>
        </button>
      </div>
    </div>
  );
}
