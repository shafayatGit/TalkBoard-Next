import Image from "next/image";
import React from "react";
import { assets } from "../../Assets/assets";
import { MdDelete } from "react-icons/md";

export default function ({
  author_img,
  title,
  author,
  mongoId,
  date,
  handleDelete,
}) {
  const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        scope="row"
      >
        <Image
          width={40}
          height={40}
          alt=""
          className="rounded-full"
          src={author_img ? author_img : assets.profile_icon}
        />
        <p>{author ? author : "No Author"}</p>
      </th>
      <td className="px-6 py-4 ">{title ? title : "No Title"}</td>
      <td className="px-6 py-4 ">{BlogDate.toISOString()}</td>
      <td
        onClick={() => handleDelete(mongoId)}
        className="px-6 py-4 text-red-700 "
      >
        <MdDelete className="cursor-pointer" size={30} />
      </td>
    </tr>
  );
}
