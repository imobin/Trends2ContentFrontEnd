import React from "react";
import Nave from "../components/Nave";
import { useParams } from "react-router";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import axios from "axios";

export default function PostDetails() {
  const { id } = useParams();
//   const navigate = useNavigate();
  const { selectedPost, setselectedPost } = useAppContext();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/home/${id}`)
      .then((i) => {
        setselectedPost(i.data[0]);
        // setselectedPost(i.data);
        // console.log(eventList);
      })
      .catch((i) => {
        console.log("from catch",i);
      });
  }, []);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{selectedPost.title}</h1>
            <p className="py-6">
              {selectedPost.content}
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
