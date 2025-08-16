"use client";
import React, { useState } from "react";
import { blog_data } from "../Assets/assets";
import BlogItem from "./BlogItem";

export default function BlogList() {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "py-1 px-4"
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "py-1 px-4"
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "py-1 px-4"
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("LifeStyle")}
          className={
            menu === "LifeStyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : "py-1 px-4"
          }
        >
          LifeStyle
        </button>
      </div>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 px-5 lg:grid-cols-4 sm:grid-cols-2  justify-around gap-10">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
}
