"use client";
import Image from "next/image";
import React from "react";
import { assets, blog_data } from "../Assets/assets";
import Link from "next/link";

export default function BlogItem({ id, image, category, title, description }) {
  return (
    <div className=" border-1 hover:shadow-[7px_7px_7px_#000000] transition transform">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={500}
          height={400}
          className="border-b mx-auto"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight">{title}</h5>
        <p className="mb-3 text-sm tracking-tight">{description}</p>
        <Link href={`/blogs/${id}`}>
          <div className="gap-2 hover:translate-x-4 transform transition duration-300 inline-flex items-center py-2 font-semibold text-center">
            Read More <Image src={assets.arrow} width={15} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}
