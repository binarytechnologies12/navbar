import React, { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IoReorderThreeSharp } from "react-icons/io5";

function App() {
  const [isopen,setisopen]=useState(true)
  
  return (
    <>

  <nav className="bg-purple-500">
<div className="h-16 flex items-center justify-between px-2">
  <div className="text-3xl text-white font-bold ">Logo</div>
  <div className="text-3xl text-white sm:hidden" onClick={()=>setisopen(!isopen)}><IoReorderThreeSharp /></div>
  {/* desktop links */}
<div className="text-white hidden sm:block ">
  <a href="" className="px-2">Home</a>
  <a href="" className="px-2">Services</a>
  <a href="" className="px-2">Contacts</a>
  <a href="" className="px-2 mb-2">About</a>
</div>

</div>
{/* mobile links */}
<div className={`${isopen ? "block":"hidden"}  text-white  sm:hidden `}>
  <a href="" className="px-2 block">Home</a>
  <a href="" className="px-2 block">Services</a>
  <a href="" className="px-2 block">Contacts</a>
  <a href="" className="px-2 block">About</a>
</div>

  </nav>
     
    </>
  );
}

export default App;
