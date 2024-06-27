import React from 'react'
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate = useNavigate()
  return (
    <div className='footer w-[95%] h-[10vh] flex justify-evenly items-center'>
        <i onClick={()=>navigate("/")} className="cursor-pointer  text-[40px] fa fa-home" aria-hidden="true"></i>
        <i onClick={()=>navigate("/Trade")} className="cursor-pointer text-[#3F83F7] text-[40px] fa fa-exchange" aria-hidden="true"></i>
        <i onClick={()=>navigate("/Mine")} className="cursor-pointer  text-[40px] fa fa-user" aria-hidden="true"></i>
    </div>
  )
}

export default Footer