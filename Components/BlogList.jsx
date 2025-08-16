import React from "react";
import { blog_data } from "../Assets/assets";
import BlogItem from "./BlogItem";

export default function BlogList() {
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          All
        </button>
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          Technology
        </button>
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          Startup
        </button>
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          LifeStyle
        </button>
      </div>
      <div className="grid grid-cols-2 px-5 lg:grid-cols-4 sm:grid-cols-3  justify-around gap-10">
        {blog_data.map( (item,index) => {
          return (
            <BlogItem
              key={index}
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
