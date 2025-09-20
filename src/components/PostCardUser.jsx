import axios from "axios";
import React from "react";
import { Link } from "react-router";

export default function PostCardUser({ postObjUser, token }) {
    function postDelete(){
        // alert("Hi agian!")
        axios
              .delete(`http://localhost:3000/creatPost/${postObjUser.id}`, {
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
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{postObjUser.title}</h2>
          <p>Created by UserID: {postObjUser.UserId}</p>
          <div className="card-actions justify-end">
            <Link to={`/postDetails/${postObjUser.id}`}>
            <button className="btn btn-primary">More</button>
            </Link>
            <Link to={`/userdashboard/postDetailsEdit/${postObjUser.id}`}>
            <button className="btn btn-primary">Edit</button>
            </Link>
             <button className="btn btn-primary" onClick={postDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}