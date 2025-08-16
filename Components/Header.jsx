import Image from "next/image";
import React from "react";
import { assets } from "../Assets/assets";

export default function Header() {
  return (
    <div className="px-5 py-5 lg:px-12 lg:py-12">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="logo"
          className="w-[130px] sm:w-[200px] "
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border  border-solid border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[0px_10px_10px_#000000] hover:rounded-2xl transform transition duration-300 hover:scale-110">
          Get Started <Image src={assets.arrow} alt="arrow"></Image>
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium"> Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] font-normal text-xs mx-auto sm:text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae
          reprehenderit doloremque ipsa est deserunt soluta beatae, sed odit
          tenetur.
        </p>
        <form className="hover:shadow-[0px_10px_10px_#000000] transform transition duration-300 hover:scale-102 shadow-[-7px_7px_0px_#000000] flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border-1 border-black">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none "
          />
          <button type="submit" className={`border-l hover:bg-gray-900 transform transition duration-300 hover:text-white py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white`}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
