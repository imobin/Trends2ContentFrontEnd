import React from 'react'
import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router'
import axios from 'axios';

export default function Register() {
    function registeration(e){
  e.preventDefault();
    const regInfo = {
      name:  e.target.name.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };
    axios
      .post("http://localhost:3000/users", regInfo)
      .then((i) => {
        alert(i.data)
      });
}
  return (
    <div>
          <form action="sumbit" onSubmit={registeration}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign-up now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    name="name"
                  />  
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
                    <Link to={"/login"} className="link link-hover">Already have an account?</Link>
                  </div>
                  <button className="btn btn-neutral mt-4">Sign up</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
