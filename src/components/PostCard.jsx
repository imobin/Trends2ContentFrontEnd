import React from "react";
import { Link } from "react-router";

export default function PostCard({ postObj }) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{postObj.title}</h2>
          {/* <p>{postObj.userId}</p> */}
          <div className="card-actions justify-end">
            <Link to={`/postDetails/${postObj.id}`}>
            <button className="btn btn-primary">More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
