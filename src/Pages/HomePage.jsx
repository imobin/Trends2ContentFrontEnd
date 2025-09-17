import React from "react";
import Nave from "../components/Nave";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { useAppContext } from "../context/AppContext";

export default function HomePage() {
    const { allPost } = useAppContext();

  return (
    <div>
        {allPost.map((i, k) => <PostCard postObj = {i}/>)}
    </div>
  );
}
