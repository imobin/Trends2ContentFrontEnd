import React from 'react'
import { Link } from 'react-router'
import { useAppContext } from '../context/AppContext'

export default function Nave() {
  const { logout } = useAppContext()
  // console.log("token form the nave:", token)
  const token = localStorage.getItem("token")
  if(token){
    console.log("form the NAV:", token)
  }
  // console.log("form the NAV:", token)
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to={"/home"} className="btn btn-ghost text-xl">Home</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        {token ? <Link to={"/userdashboard"}>User dashboard</Link>: <Link to={"/login"}>Login/Register</Link>}
        </li>
        <li>{token && (<button className="btn btn-neutral" onClick={logout}>Logout</button>)}</li>
      <li>
        <details>
          <summary>Categories</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to={"/"}>test1</Link> </li>
            <li><Link to={"/"}>test2</Link> </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}
