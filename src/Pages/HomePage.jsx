import React from "react";
import Nave from "../components/Nave";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { useAppContext } from "../context/AppContext";

export default function HomePage() {
    const { allPost } = useAppContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4">
        {allPost.map((i, k) => <PostCard postObj = {i}/>)}
    </div>
  );
}
