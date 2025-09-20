import React, { useEffect } from "react";
import Nave from "../components/Nave";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { useAppContext } from "../context/AppContext";
import { useLocation } from "react-router";
import axios from "axios";

export default function HomePage() {
    const { allPost, setallPost } = useAppContext();
    const location = useLocation();
    // const [allPost, setallPost] = useState([]);
    useEffect(() => {
    const getAllPost = async () => {
      try {
        const thePosts = await axios.get("http://localhost:3000/home/");
        // setallPost(allPost)
        setallPost(thePosts.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPost();
  }, [location.pathname]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4">
        {allPost.map((i, k) => <PostCard index={k} postObj = {i}/>)}
    </div>
  );
}
