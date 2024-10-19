import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar=()=>{
    return (
        <nav className="sticky top-0 z-50 " style={{"backgroundColor":"#0f1825"}}>
        <div className="flex justify-between items-center px-28 min-h-10v py-5">
            <div className="flex gap-x-10 items-center" >
                <NavLink className='font-black text-3xl '>Allen</NavLink>
                <div className="flex gap-x-6">
                <NavLink>
                    Exams
                    
                </NavLink>
                <NavLink>Programs</NavLink>
                <NavLink>Scholarships</NavLink>
                <NavLink className='relative mr-4 pr-5'>
                    <div >
                    Test Series</div>
                    <span className="absolute right-5 top-2 -translate-y-full translate-x-full px-1.5 leading-4.5 tracking-wide bg-yellow-600 pt-[1px] text-2xs font-bold text-xs rounded-r-lg rounded-t-lg">NEW</span>
                    
                 </NavLink>
                <NavLink>Study Materials</NavLink>
                </div>
            </div>
            <div className="flex gap-x-4" >
                <button className="px-3 py-1.5 rounded-full  bg-white text-black flex items-center gap-x-2"><BiSolidPhoneCall className="text-2xl"/>Talk to us</button>
                <button className="px-3 py-1.5 rounded-full border-white border-2">Login</button>
            </div>
        </div>
        <div></div>
        </nav>
    )
}

export default Navbar;