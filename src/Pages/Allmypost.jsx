import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import PostCard from '../components/PostCard';

export default function Allmypost() {
  const { userID, setuserID } = useAppContext();
  const [userPost, setuserPost] = useState([]);
  useEffect(() => {
    const getAlluserPost = async () => {
      try {
        const theID = {UserId: userID}
        const thePosts = await axios.post("http://localhost:3000/userpost/", theID);
        // setallPost(allPost)
        // console.log(thePosts)
        setuserPost(thePosts.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAlluserPost();
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4">
        {userPost.map((i, k) => <PostCard index={k} postObj = {i}/>)}
    </div>
  )
}
