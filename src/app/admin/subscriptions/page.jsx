"use client";
import React, { useEffect, useState } from "react";
import EmailTableItem from "../../../../Components/AdminComponents/EmailTableItem";
import axios from "axios";
import Swal from "sweetalert2";

export default function SubscriptionPage() {
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    const response = await axios.get("/api/email");
    setData(response.data);
  };

  //   console.log(data)

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDeleteEmail = async (mongoId) => {
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
        const res = await axios.delete(`/api/email`, {
          params: {
            id: mongoId,
          },
        });
        Swal.fire({
          text: res.data.message,
          icon: "success",
        });
        handleFetch();
      }
    });
  };

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscriptions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 ">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-shadow-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="px-6 hidden sm:block py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <EmailTableItem
                  key={index}
                  handleDeleteEmail={handleDeleteEmail}
                  email={item.email}
                  mongoId={item._id}
                  date={item.date}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
