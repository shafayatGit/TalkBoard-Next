"use client";
import Image from "next/image";
import React from "react";
import { assets, blog_data } from "../Assets/assets";

export default function BlogItem({image,category,title,description}) {
  return (
    <div className=" border-1 hover:shadow-[7px_7px_7px_#000000] transition transform">
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="border-b "
      />
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight">
          {description}
        </p>
        <div className="gap-2 hover:translate-x-4 transform transition duration-300 inline-flex items-center py-2 font-semibold text-center">
          Read More <Image src={assets.arrow} width={15} alt="" />
        </div>
      </div>
    </div>
  );
}
