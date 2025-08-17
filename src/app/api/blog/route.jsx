import { title } from "process";
import { ConnectDB } from "../../../../lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "../../../../lib/models/BlogModel";

const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function GET(req) {
  return NextResponse.json({ msg: "Api ok" });
}

export async function POST(req) {
  const formData = await req.formData();
  const timeStamp = Date.now();

  //   image storing in the public folder
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timeStamp}_${image.name}`;
  await writeFile(path, buffer);

  const imgURL = `/${timeStamp}_${image.name}`;
    console.log("Image URL", imgURL);

  //   Creating data that will come from the body of the form
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgURL}`,
    author_img: `${formData.get("author_img")}`,
  };

  // then pass the blogData to BlogModel and for posting we have to use create
  await BlogModel.create(blogData);
  console.log("Blog Saved In Database");
  return NextResponse.json({success: true, message: "Data Posted"});
}