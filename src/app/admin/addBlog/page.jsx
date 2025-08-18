"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../../Assets/assets";
import axios, { Axios } from "axios";
import { toast } from "react-toastify";

export default function AddProductPage() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Shafayat Hossain",
    author_img:
      "https://res.cloudinary.com/dp44jbhsq/image/upload/v1755498076/644E5CAC-AB3E-4988-B303-804ECD0B92EB_h75boo.jpg",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    // console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("author_img", data.author_img);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Shafayat Hossain",
        author_img:
          "https://res.cloudinary.com/dp44jbhsq/image/upload/v1755498076/644E5CAC-AB3E-4988-B303-804ECD0B92EB_h75boo.jpg",
      });
      return;
    }
    toast.error("Something Error");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4 cursor-pointer"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
          />
        </label>
        <input
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4 ">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          required
          placeholder="Type Here"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4 ">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          cols={9}
          rows={6}
          type="text"
          required
          placeholder="Write Content Here"
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
          name="category"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>{" "}
        <br />
        <button
          type="submit"
          className="cursor-pointer mt-8 w-40 h-12 bg-black text-white"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
