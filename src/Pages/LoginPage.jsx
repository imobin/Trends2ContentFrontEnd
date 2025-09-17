import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { data, useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";

export default function LoginPage() {
  //   console.log(token);
  const { isJWT } = useAppContext();
  const token = localStorage.getItem("token")
  
  console.log("from login",token)
  const navigate = useNavigate(); 
  // useEffect(() => {
  //  if(isJWT(i.data)){
  //           navigate("/userdashboard");
  //         } 
  // }, [token])

  function login(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const longInfo = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    axios
      .post("http://localhost:3000/login", longInfo)
      .then((i) => {
        if(isJWT(i.data)){
          localStorage.setItem("token", i.data)
          alert(`${username} welcome to your profile!`)
          navigate("/userdashboard");
        } else{
          alert("Username or Password is worng!")
        }
      });
  }

  return (
    <div>
      <form action="sumbit" onSubmit={login}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Username</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    name="username"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
