# 📝 TalkBoard

A modern **Blog Platform** built with **Next.js (App Router), MongoDB (Mongoose), Tailwind CSS, and Cloudinary**.  
TalkBoard allows users to browse blogs by category, read blog details, and subscribe with their email.  
Admins have a full-featured dashboard to **manage blogs** and **subscribers**.

## Live - [https://talk-board-next.vercel.app/]

---

## 🚀 Features

### 🌍 Public Features
- 📰 **Read Blogs** – Browse all published blogs
- 🏷️ **Filter by Category** – Select and filter different blog types
- 📖 **Dynamic Blog Pages** – View blog details via `[id]` route
- ✉️ **Subscribe with Email** – Save email subscriptions to MongoDB

### 🔑 Admin Features
- 📊 **Admin Dashboard** – Secure admin routes
- ✍️ **Add Blog** – Upload blog with image, title, category, description
- 🗂️ **Blog Management** – View blog list & delete blogs
- 👥 **Subscriber Management** – View & delete subscribers
- 📸 **Image Hosting** – Upload blog images to Cloudinary

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (App Router), React, Tailwind CSS, React Toastify  
- **Backend:** Next.js API Routes  
- **Database:** MongoDB + [Mongoose](https://mongoosejs.com/)  
- **Image Hosting:** [Cloudinary](https://cloudinary.com/)  
- **Deployment:** [Vercel](https://vercel.com/)  

---

## 📂 Folder Structure

TalkBoard-Next
├── Assets/ # Static assets & icons
├── Components/ # Reusable components
├── lib/ # Database config & Mongoose models
│ ├── config/db.js
│ └── models/
│ ├── BlogModel.js
│ └── EmailModel.js
├── src/app/
│ ├── blogs/[id] # Dynamic blog details page
│ ├── admin/ # Admin routes (addBlog, blogList, subscriptions)
│ └── api/ # API routes (blog, email)
└── public/ # Static uploads & Cloudinary previews

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/shafayatGit/TalkBoard-Next
cd TalkBoard
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Environment Variables
This project uses a .env.local file for sensitive keys.
Create it in the root folder and add the following:

env
Copy
Edit
# MongoDB Connection
DB_USER=DBname
DB_PASS=DBPass

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

✅ These variables are automatically loaded by Next.js into process.env.
You can access them in API routes like this:

js
Copy
Edit
const db = process.env.MONGODB_URI;
4️⃣ Run Development Server
bash
Copy
Edit
npm run dev
Open 👉 http://localhost:3000

🏠 Homepage
Browse blogs by category

📖 Blog Details
Dynamic route [id]

📊 Admin Dashboard
Manage blogs & subscribers

🌟 Future Roadmap
🔐 Add Authentication with NextAuth.js

📑 Blog Pagination & Search

🌙 Dark Mode

⭐ Premium Subscriptions

🤝 Contributing
Pull requests are welcome!
For major changes, open an issue first to discuss.


👨‍💻 Author
Built with ❤️ by Md.Shafayat Hossain - https://shafayat-dev.web.app/