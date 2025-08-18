import mongoose from "mongoose";
import EmailModel from "../../../../lib/models/EmailModel";
import { NextResponse } from "next/server";

// Getting All Subscribed Email Data
export async function GET(req) {
  const SubsEmails = await EmailModel.find({});
  return NextResponse.json(SubsEmails);
}

// Posting Email Data
export async function POST(req) {
  const formData = await req.formData();
  const timeStamp = Date.now();

  const EmailData = {
    email: `${formData.get("email")}`,
  };

  await EmailModel.create(EmailData);
  return NextResponse.json({
    success: true,
    message: "Successfully Subscribed",
  });
}

// Deleting API
export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  const email = await EmailModel.findById(id);

  await EmailModel.findByIdAndDelete(email);
  return NextResponse.json({ success: true, message: "Blog Deleted" });
}
