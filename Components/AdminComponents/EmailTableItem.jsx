import React from "react";
import { MdDelete } from "react-icons/md";

export default function ({ email, mongoId, date, handleDeleteEmail }) {
  const emailDate = new Date(date);
  return (
    <tr className="bg-white border-b text-left ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {email ? email : "No Email Found"}
      </th>
      <td className="px-6 py-4 hidden sm:block ">{emailDate.toISOString()}</td>
      <td className="px-6 py-4 text-red-600 ">
        <MdDelete
          className="cursor-pointer"
          onClick={() => handleDeleteEmail(mongoId)}
          size={25}
        />
      </td>
    </tr>
  );
}
