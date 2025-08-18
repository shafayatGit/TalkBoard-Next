"use client";
import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../Assets/assets";
import Image from "next/image";
import { PiGitlabLogoSimpleBold } from "react-icons/pi";
import Footer from "../../../../Components/Footer";
import Link from "next/link";
import axios from "axios";

export default function page({ params }) {
  const [data, setData] = useState(null);
  const p = params;

  const fetchBlogData = async () => {
    const blog = await axios.get(`/api/blog?id=${p.id}`);
    // const singleBlog = blogs.filter((b) => b._id === p.id);
    setData(blog.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <div className="text-black inline-flex items-center gap-1 text-xl sm:text-3xl">
              <PiGitlabLogoSimpleBold />
              <h1 className="font-bold">TalkBoard</h1>
            </div>
          </Link>
          <Link href={"/admin/addBlog"}>
            <button className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border  border-solid border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[0px_10px_10px_#000000] hover:rounded-2xl transform transition duration-300 hover:scale-110">
              Get Started <Image src={assets.arrow} alt="arrow"></Image>
            </button>
          </Link>
        </div>

        <div className="text-center my-24 ">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-3xl mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-black rounded-full"
          />
          <h1 className="mt-1 pb-2 text-lg max-w-3xl mx-auto">
            Author: {data.author}
          </h1>
        </div>

        <div className="mx-5 max-w-4xl md:mx-auto mt-[-100px] mb-10">
          <Image
            src={data.image}
            width={1280}
            height={720}
            alt=""
            className="border-4 border-white "
          />
          <h1 className="my-8 text-[26px] font-semibold ">Introduction</h1>
          <p className="">{data.description}</p>
          <h3 className="my-5 text-lg font-semibold">
            Step 1: Self-Reflection and Goal Setting
          </h3>
          <p className="my-3">
            Before You can manage your lifestyle, you must have a clear
            understanding to your achievement. Start by reflecting on your
            values , aspirations , and long-term goals.
          </p>
          <p className="my-3">
            Before You can manage your lifestyle, you must have a clear
            understanding to your achievement. Start by reflecting on your
            values , aspirations , and long-term goals.
          </p>
          <h3 className="my-5 text-lg font-semibold">
            Step 2: Self-Reflection and Goal Setting
          </h3>
          <p className="my-3">
            Before You can manage your lifestyle, you must have a clear
            understanding to your achievement. Start by reflecting on your
            values , aspirations , and long-term goals.
          </p>
          <p className="my-3">
            Before You can manage your lifestyle, you must have a clear
            understanding to your achievement. Start by reflecting on your
            values , aspirations , and long-term goals.
          </p>
          <h3 className="my-5 text-lg font-semibold">
            Step 3: Self-Reflection and Goal Setting
          </h3>
          <p className="my-3">
            Before You can manage your lifestyle, you must have a clear
            understanding to your achievement. Start by reflecting on your
            values , aspirations , and long-term goals.
          </p>
          <p className="my-3">
            Before You can manage your lifestyle, you must have a clear
            understanding to your achievement. Start by reflecting on your
            values , aspirations , and long-term goals.
          </p>

          <h3 className="my-5 text-lg font-semibold">Conclusion</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            quia fuga unde, autem molestiae suscipit fugit, doloribus
            consequuntur nulla minus necessitatibus quam modi animi est
            voluptas. Temporibus vitae voluptates distinctio.
          </p>

          <div className="my-24 ">
            <p className="text-black font-semibold my-4 ">
              Share this article on social media
            </p>
            <div className="flex">
              <Image src={assets.facebook_icon} width={50} alt="" />
              <Image src={assets.twitter_icon} width={50} alt="" />
              <Image src={assets.googleplus_icon} width={50} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  ) : (
    <h1>No Item Found!</h1>
  );
}
