import Image from "next/image";
import Header from "../../Components/Header";
import BlogItem from "../../Components/BlogItem";
import BlogList from "../../Components/BlogList";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <BlogList></BlogList>
    </div>
  );
}
