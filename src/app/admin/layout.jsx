import Image from "next/image";
import Sidebar from "../../../Components/AdminComponents/Sidebar";
import { assets } from "../../../Assets/assets";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[63px] px-12 border-b border-black ">
            <h3 className="font-medium">Admin Panel</h3>
            <Image
              width={40}
              className="rounded-full"
              src={assets.profile_icon}
              alt=""
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
