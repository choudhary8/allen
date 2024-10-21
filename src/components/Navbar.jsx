import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Navbar=()=>{
    const [menu,setMenu]=useState(false)
    const [exams,setExams]=useState(false)
    const [jee,setJee]=useState(false)
    const [neet,setNeet]=useState(false)
    const [minor,setMinor]=useState(false)
    const [programs,setPrograms]=useState(false)
    const [scholarships,setScholarships]=useState(false)

    return (
        <nav className="sticky top-0 z-50 " style={{"backgroundColor":"#0f1825"}}>
        <div className="flex justify-between items-center px-28 min-h-10v hidden lg:flex">
            <div className="flex gap-x-10 items-center" >
            <NavLink className='px-2 font-black text-xl ' to='/'>Allen</NavLink>
                <ul className="flex gap-x-6">
                <li className="nav-item py-3 my-2 border-blue-500 hover:border-b-2 relative zx" >
                    Exams
                   { <ul className="nav-list absolute top-14 flex flex-col bg-[#284267] w-56 py-2 px-1 rounded-lg">
                        <li className="nav-list-items relative py-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">Jee <IoIosArrowForward/>
                                    <ul className="absolute -right-60 -top-2 flex flex-col bg-[#284267] w-56 py-2 rounded-lg">
                                        <li className="py-2 flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">
                                            <NavLink to='jee/class-11'>11th Class</NavLink>
                                        </li>
                                        <li className="py-2 flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">
                                        <NavLink to='jee/class-12'>12th Class</NavLink>
                                        </li>
                                        <li className="py-2 flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">
                                        <NavLink to='jee/class-12-plus'>12th Plus Class</NavLink>
                                        </li>
                                    </ul>
                        </li>
                        <li className="nav-list-items relative py-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">Neet <IoIosArrowForward/>
                                <ul className="absolute -right-60 -top-2 flex flex-col bg-[#284267] w-56 py-2 rounded-lg">
                                    <li className="py-2 flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">
                                        <NavLink to='jee/class-11'>11th Class</NavLink>
                                    </li>
                                    <li className="py-2 flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">
                                    <NavLink to='jee/class-12'>12th Class</NavLink>
                                    </li>
                                    <li className="py-2 flex justify-between items-center rounded-lg hover:bg-[#43679a] px-4">
                                    <NavLink to='jee/class-12-plus'>12th Plus Class</NavLink>
                                    </li>
                                </ul>
                        </li>
                        <li className="nav-list-items relative py-2 cursor-pointer  rounded-lg hover:bg-[#43679a] px-4">
                            <NavLink className="flex justify-between items-center" to='/coming-soon'>Class 6-10 <IoIosArrowForward/></NavLink>
                        </li>
                    </ul>}

                </li>
                <li className="nav-item py-3 my-2 border-blue-500 hover:border-b-2 relative zx" >
                    Programs
                   {<ul className="nav-list absolute top-14 flex flex-col bg-[#284267] w-56 py-2 px-1 rounded-lg">
                    <li className="py-2 hover:cursor-pointer rounded-lg hover:bg-[#43679a] px-4">
                        <NavLink to=''>Online Programs</NavLink>
                    </li>
                        <li className="py-2 cursor-pointer rounded-lg hover:bg-[#43679a] px-4">
                        <NavLink to='https://www.allen.ac.in'>Classroom Programs</NavLink>
                        </li>
                        <li className="py-2 cursor-pointer rounded-lg hover:bg-[#43679a] px-4">
                        <NavLink to='https://dlp.allen.ac.in'>Distance Learning</NavLink>
                        </li>
                    </ul>}

                </li>
                <li className="nav-item py-3 my-2 border-blue-500 hover:border-b-2 relative" >
                    Scholarships
                   {<ul className="nav-list absolute top-14 flex flex-col bg-[#284267] w-56 py-2 px-1 rounded-lg">
                         <li className="py-2 hover:cursor-pointer rounded-lg hover:bg-[#43679a] px-4">
                         <NavLink to='/adsat-register'>ADSAT</NavLink>
                         </li>
                        <li className="py-2 cursor-pointer rounded-lg hover:bg-[#43679a] px-4">
                        <NavLink to='https://studyonline.tallentex.com'>TALLENTEX</NavLink>
                        </li>   
                    </ul>}

                </li>
                <li className='nav-item py-3 my-2 border-blue-500 hover:border-b-2  relative mr-4 pr-5' >
                    <div>
                    Test Series
                    {<ul className="nav-list absolute top-14 flex flex-col bg-[#284267] w-56 py-2 px-1 rounded-lg">
                        <li className="py-2  rounded-lg hover:bg-[#43679a] px-4">
                        <NavLink className="flex justify-between items-center" to='/coming-soon'>Jee Main <IoIosArrowForward/></NavLink>
                        </li>
                        <li className="py-2  rounded-lg hover:bg-[#43679a] px-4">
                        <NavLink className="flex justify-between items-center" to='/coming-soon'>Neet <IoIosArrowForward/></NavLink>
                        </li>
                        <li className="py-2  rounded-lg hover:bg-[#43679a] px-4">
                        <NavLink className="flex justify-between items-center" to='/coming-soon'>Jee (Main+Advanced) <IoIosArrowForward/></NavLink>
                        </li>
                    </ul>}
                    </div>
                    <span className="absolute right-5 top-4 -translate-y-full translate-x-full px-1.5 leading-4.5 tracking-wide bg-yellow-600 pt-[1px] text-2xs font-bold text-xs rounded-r-lg rounded-t-lg">NEW</span>
                    
                 </li>
                <li className='nav-item py-3 my-2 border-blue-500 hover:border-b-2  relative mr-4 pr-5'>
                <NavLink className="flex justify-between items-center" to='/coming-soon'>Study Materials</NavLink>
                </li>
                </ul>
            </div>
            <div className="flex gap-x-4 py-5" >
                <button className="px-3 py-1.5 rounded-full  bg-white text-black flex items-center gap-x-2"><BiSolidPhoneCall className="text-2xl"/>Talk to us</button>
                <button className="px-3 py-1.5 rounded-full border-white border-2">Login</button>
            </div>
        </div>


        <div className="lg:hidden">
            <div className="flex justify-between items-center px-4 py-3 lg:hidden">
                    <div className="flex">
                        <IoMenu className="font-bold text-3xl" onClick={()=>{setMenu(true)}}/>
                        <NavLink className='px-2 font-black text-xl ' to='/'>Allen</NavLink>
                    </div>
                    <button onClick={()=>{setMenu(false)}}>
                        <NavLink to="/contact"  className="px-3 py-1.5 rounded-full  bg-white text-black flex items-center gap-x-2"><BiSolidPhoneCall className="text-2xl"/>Talk to us</NavLink>
                    </button>
            </div>

            {
                menu&&<div className="bg-black fixed left-0 top-0 p-5 h-full w-3/4 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between p-0 m-0">
                        <NavLink className=' font-black text-xl ' to='/'>Allen</NavLink>
                        <IoIosClose className="font-bold text-4xl hover:bg-[#43679a] cursor-pointer" onClick={()=>{setMenu(false)}}/>
                    </div>
                    <ul className="px-3">
                        <li className="list-item py-3" >
                            <div className="flex items-center  justify-between" onClick={()=>{setExams(e=>!e)}}>Exams {exams&&<IoIosArrowUp/>} {!exams&&<IoIosArrowDown/>}</div>
                            {
                                exams&& 
                                <ul>
                                <li>
                                <div className="flex items-center  justify-between" onClick={()=>{setJee(j=>!j)}}>Jee{jee&&<IoIosArrowUp/>} {!jee&&<IoIosArrowDown/>}</div>
                                {
                                    jee&&<ul>
                                    <li onClick={()=>{setMenu(false)}}>
                                        <NavLink to='jee/class-11'>11th Class</NavLink>
                                    </li>
                                    <li onClick={()=>{setMenu(false)}}>
                                    <NavLink to='jee/class-12'>12th Class</NavLink>
                                    </li>
                                    <li onClick={()=>{setMenu(false)}}>
                                    <NavLink to='jee/class-12-plus'>12th Plus Class</NavLink>
                                    </li>
                                </ul>
                                }
                                </li>
                                <li >
                                <div className="flex items-center  justify-between" onClick={()=>{setNeet(j=>!j)}}>Neet{neet&&<IoIosArrowUp/>} {!neet&&<IoIosArrowDown/>}</div>
                                {
                                    neet&&<ul>
                                    <li onClick={()=>{setMenu(false)}}>
                                        <NavLink to='jee/class-11'>11th Class</NavLink>
                                    </li>
                                    <li onClick={()=>{setMenu(false)}}>
                                    <NavLink to='jee/class-12'>12th Class</NavLink>
                                    </li>
                                    <li onClick={()=>{setMenu(false)}}>
                                    <NavLink to='jee/class-12-plus'>12th Plus Class</NavLink>
                                    </li>
                                </ul>
                                }
                                </li>
                                <li onClick={()=>{setMenu(false)}}>
                                <div >
                                <NavLink className="flex justify-between items-center" to='/coming-soon'>Class 6-10 <IoIosArrowDown/></NavLink>
                                </div>
                                </li>
                                </ul>
                            }
                        </li>
                        <hr className="border-gray-500"/>
                        <li className="list-item py-3">
                                <div className="flex items-center  justify-between" onClick={()=>{setPrograms(j=>!j)}}>Programs{programs&&<IoIosArrowUp/>} {!programs&&<IoIosArrowDown/>}</div>
                                {
                                    programs&&<ul>
                                    <li onClick={()=>{setMenu(false)}}>
                                        <NavLink to=''>Online Programs</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to='https://www.allen.ac.in'>Classroom Programs</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to='https://dlp.allen.ac.in'>Distance Learning</NavLink>
                                    </li>
                                </ul>
                                }
                                </li>
                        <hr className="border-gray-500"/>
                        <li className="list-item py-3">
                                <div className="flex items-center  justify-between" onClick={()=>{setScholarships(j=>!j)}}>Scholarships{scholarships&&<IoIosArrowUp/>} {!scholarships&&<IoIosArrowDown/>}</div>
                                {
                                    scholarships&&<ul>
                                    <li onClick={()=>{setMenu(false)}}>
                                    <NavLink to='/adsat-register'>ADSAT</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to='https://studyonline.tallentex.com'>TALLENTEX</NavLink>
                                    </li>
                                </ul>
                                }
                                </li>
                        <hr className="border-gray-500"/>
                        <li className="list-item py-3">
                        <div className="flex items-center  justify-between">Test Series<IoIosArrowDown/></div>
                        </li>
                        <hr className="border-gray-500"/>
                        <li className="list-item py-3">Study Materials</li>
                        <hr className="border-gray-500"/>
                    </ul>
                </div>
                <button onClick={()=>{setMenu(false)}}>
                    <NavLink className="px-3 py-0.5 text-blue-300 rounded-full border-white font-bold" to='/login' >Login</NavLink>
                </button>
                </div>
            }
        </div>
        </nav>
    )
}

export default Navbar;