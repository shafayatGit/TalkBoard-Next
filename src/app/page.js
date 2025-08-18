import Image from "next/image";
import Header from "../../Components/Header";
import BlogItem from "../../Components/BlogItem";
import BlogList from "../../Components/BlogList";
import Footer from "../../Components/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="">
      <ToastContainer/>
      <Header></Header>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
}
