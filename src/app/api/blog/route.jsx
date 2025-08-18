import { title } from "process";
import { ConnectDB } from "../../../../lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "../../../../lib/models/BlogModel";
const fs = require("fs");
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

// Getting API
export async function GET(req) {
  const blogId = req.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    // return NextResponse.json({success: false, message:"You have to give verified ID"})
    const blogs = await BlogModel.find({});

    return NextResponse.json({ blogs });
  }
}

// Posting API
// export async function POST(req) {
//   const formData = await req.formData();
//   const timeStamp = Date.now();

//   //   Image Saving in Cloudinary

//   //   image storing in the public folder using file system
//   const image = formData.get("image");
//   // Convert to buffer
//   const arrayBuffer = await image.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);
//   // Upload to Cloudinary
//   const result = await cloudinary.uploader
//     .upload_stream({ folder: "blogs" }, (error, uploadedImage) => {
//       if (error) throw error;
//       console.log("Image URL:", uploadedImage.secure_url);
//     })
//     .end(buffer);

//   //   Creating data that will come from the body of the form
//   const blogData = {
//     title: `${formData.get("title")}`,
//     description: `${formData.get("description")}`,
//     category: `${formData.get("category")}`,
//     author: `${formData.get("author")}`,
//     image: `${imgURL}`,
//     author_img: `${formData.get("author_img")}`,
//   };

//   // then pass the blogData to BlogModel and for posting we have to use create
//   await BlogModel.create(blogData);
//   console.log("Blog Saved In Database");
//   return NextResponse.json({ success: true, message: "Data Posted" });
// }

export async function POST(req) {
  try {
    // get formData
    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const author = formData.get("author");
    const image = formData.get("image");
    const author_img = formData.get("author_img"); // <input type="file" name="image" />

    // convert image to buffer
    const buffer = Buffer.from(await image.arrayBuffer());

    // upload to cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "blogs" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    // prepare blogData
    const blogData = {
      title,
      description,
      category,
      author_img,
      author,
      image: uploadResult.secure_url, // Cloudinary URL
    };

    // save blog
    const newBlog = await BlogModel.create(blogData);

    return NextResponse.json({ success: true, message: "Data Posted" });
  } catch (error) {
    console.error("Blog create error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Deleting API
export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);

  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, message: "Blog Deleted" });
}
