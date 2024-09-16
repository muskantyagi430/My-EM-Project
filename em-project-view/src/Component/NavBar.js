import React from 'react'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-slate-800 h-16 px-16 py-16 items-center flex">
        <h1 className="text-5xl font-bold text-green-500">
          EM Service Incharge
        </h1>
        <div className="space-x-4 ml-auto text-3xl hover:cursor-pointer ">
          <a onClick={() => navigate("/home")} className="hover:text-green-400" >
          
            Home
          </a>
          <a onClick={() => navigate("/about")} className="hover:text-blue-400" >
          
            About
          </a>
          
          <a  onClick={() => navigate("/logout")} className="hover:text-red-400" >
            
            Logout
          </a>
        </div>
      </div>
  )
}

export default NavBar