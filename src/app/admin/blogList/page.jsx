"use client";
import React, { useEffect, useState } from "react";
import BlogTableItem from "../../../../Components/AdminComponents/BlogTableItem";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("/api/blog");
    setBlogs(res.data.blogs);
  };

  const handleDelete = async (mongoId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`/api/blog`, {
          params: {
            id: mongoId,
          },
        });
        Swal.fire({
          text: res.data.message,
          icon: "success",
        });
        fetchBlogs()
      }
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar">
        <table className="w-full text-sm text-gray-500 ">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author Name
              </th>
              <th scope="col" className=" px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className=" px-6 py-3">
                Blog Date
              </th>
              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((item, index) => {
              return (
                <BlogTableItem
                  key={index}
                  handleDelete={handleDelete}
                  date={item.date}
                  mongoId={item._id}
                  author_img={item.author_img}
                  title={item.title}
                  author={item.author}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
