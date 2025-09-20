import React, { useRef } from "react";
import Nave from "../components/Nave";
import { useParams } from "react-router";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import axios from "axios";

export default function PostDetailsEdit() {
  const { id } = useParams();
  const content = useRef(null);
  const title = useRef(null);
  const token = localStorage.getItem("token")
  const { userID } = useAppContext()
  //   console.log("form detailsedit:", id)
  //   const navigate = useNavigate();
  const { selectedPost, setselectedPost } = useAppContext();
    function postUpdate(){
        const postpub = {
      title: title.current.textContent,
      content: content.current.textContent,
      UserId: userID,
      CategoryId: 2
    }
        // alert("Hi agian!")
        axios
              .put(`http://localhost:3000/creatPost/${id}`, postpub ,{
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
              .then((i) => {
                alert(i.data)
              })
              .catch((i) => {
                console.log("from catch2",i);
              });
    }
  useEffect(() => {
    axios
      .get(`http://localhost:3000/home/${id}`)
      .then((i) => {
        setselectedPost(i.data[0]);
        // setselectedPost(i.data);
        // console.log(eventList);
      })
      .catch((i) => {
        console.log("from catch", i);
      });
  }, []);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => console.log("New title:", e.target.innerText)}
              ref={title}
              className="text-5xl font-bold"
            >
              {selectedPost.title}
            </h1>
            <p
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={(e) => console.log("New title:", e.target.innerText)}
              ref={content}
              className="py-6"
            >
              {selectedPost.content}
            </p>
            <button className="btn btn-primary" onClick={postUpdate}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
