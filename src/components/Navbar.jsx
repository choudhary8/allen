import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

const Navbar=()=>{

    return (
        <nav className="sticky top-0 z-50 " style={{"backgroundColor":"#0f1825"}}>
        <div className="flex justify-between items-center px-28 min-h-10v">
            <div className="flex gap-x-10 items-center" >
                <NavLink className='py-5 font-black text-3xl ' to='/'>Allen</NavLink>
                <div className="flex gap-x-6">
                <NavLink className="nav-item py-3 my-2 border-blue-500 hover:border-b-2 relative zx" >
                    Exams
                   { <ul className="nav-list absolute top-14 flex flex-col bg-[#284267] w-56 py-2 px-1 rounded-lg">
                        <li className="py-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">Jee <IoIosArrowForward/></li>
                        <li className="py-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">Neet <IoIosArrowForward/></li>
                        <li className="py-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">Class 6-10 <IoIosArrowForward/></li>
                    </ul>}

                </NavLink>
                <NavLink className="nav-item py-3 my-2 border-blue-500 hover:border-b-2 relative zx" >
                    Programs
                   {<ul className="nav-list absolute top-14 flex flex-col bg-[#284267] w-56 py-2 px-1 rounded-lg">
                    <li className="py-2 hover:cursor-pointer rounded-lg hover:bg-[#43679a] px-4">Online Programs</li>
                        <li className="py-2 cursor-pointer rounded-lg hover:bg-[#43679a] px-4">Classroom Programs</li>
                        <li className="py-2 cursor-pointer rounded-lg hover:bg-[#43679a] px-4">Distance Learning</li>
                    </ul>}

                </NavLink>
                <NavLink className="nav-item py-3 my-2 border-blue-500 hover:border-b-2 relative" >
                    Scholarships
                   {<ul className="nav-list absolute top-14 flex flex-col bg-[#284267] w-56 py-2 px-1 rounded-lg">
                         <li className="py-2 hover:cursor-pointer rounded-lg hover:bg-[#43679a] px-4">ADSAT</li>
                        <li className="py-2 cursor-pointer rounded-lg hover:bg-[#43679a] px-4">TALLENTEX</li>   
                    </ul>}

                </NavLink>
                <NavLink className='nav-item py-3 my-2 border-blue-500 hover:border-b-2  relative mr-4 pr-5' >
                    <div >
                    Test Series
                    {<ul className="nav-list absolute top-14 flex flex-col bg-[#284267] w-56 py-2 px-1 rounded-lg">
                        <li className="py-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">Jee Main<IoIosArrowForward/></li>
                        <li className="py-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">Neet <IoIosArrowForward/></li>
                        <li className="py-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">Jee (Main+Advanced) <IoIosArrowForward/></li>
                    </ul>}
                    </div>
                    <span className="absolute right-5 top-2 -translate-y-full translate-x-full px-1.5 leading-4.5 tracking-wide bg-yellow-600 pt-[1px] text-2xs font-bold text-xs rounded-r-lg rounded-t-lg">NEW</span>
                    
                 </NavLink>
                <NavLink className="nav-item py-5 ">Study Materials</NavLink>
                </div>
            </div>
            <div className="flex gap-x-4 py-5" >
                <button className="px-3 py-1.5 rounded-full  bg-white text-black flex items-center gap-x-2"><BiSolidPhoneCall className="text-2xl"/>Talk to us</button>
                <button className="px-3 py-1.5 rounded-full border-white border-2">Login</button>
            </div>
        </div>
        <div></div>
        </nav>
    )
}

export default Navbar;