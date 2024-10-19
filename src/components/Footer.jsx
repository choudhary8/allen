import { FaYoutube, FaInstagram, FaSquareFacebook, FaXTwitter, FaLinkedin  } from "react-icons/fa6";
const Footer=()=>{
    return (
        <>
        <div className="px-44 py-12">
            <div className="grid grid-cols-6 gap-10">
                <div>
                    <div className="font-semibold py-2">About</div>
                    <div className="flex flex-col text-xs">
                        <a href="" className="pt-4">About us</a>
                        <a href="" className="pt-4">Blog</a>
                        <a href="" className="pt-4">News</a>
                        <a href="" className="pt-4">MyExam EduBlogs</a>
                        <a href="" className="pt-4">Privacy policy</a>
                        <a href="" className="pt-4">Public notice</a>
                        <a href="" className="pt-4">Careers</a>
                    </div>
                </div>
                <div>
                    <div className="font-semibold py-2">Help & Support</div>
                    <div className="flex flex-col text-xs">
                    <a href="" className="pt-4">Refund policy</a>
                    <a href="" className="pt-4">Transfer policy</a>
                    <a href="" className="pt-4">Terms & Conditions</a>
                    <a href="" className="pt-4">Contact us</a>
                    </div>
                </div>
                <div>
                    <div className="font-semibold py-2">Popular Goals</div>
                    <div className="flex flex-col text-xs">
                    <a href="" className="pt-4">NEET UG</a>
                    <a href="" className="pt-4">JEE Advanced</a>
                    <a href="" className="pt-4">6th to 10th</a>
                    </div>
                </div>
                <div>
                    <div className="font-semibold py-2">Courses</div>
                    <div className="flex flex-col text-xs">
                    <a href="" className="pt-4">Ultimate Program</a>
                    <a href="" className="pt-4">Distance learning</a>
                    <a href="" className="pt-4">Online Test Series</a>
                    </div>
                </div>
                <div>
                    <div className="font-semibold py-2">Centers</div>
                    <div className="flex flex-col text-xs">
                    <a href="" className="pt-4">Kota</a>
                    <a href="" className="pt-4">Bangalore</a>
                    <a href="" className="pt-4">Indore</a>
                    <a href="" className="pt-4">Delhi</a>
                    <a href="" className="pt-4">More centres</a>
                    </div>
                </div>
                <div>
                    <div className="font-semibold py-2">Exam Information</div>
                    <div className="flex flex-col text-xs">
                    <a href="" className="pt-4">JEE Main</a>
                    <a href="" className="pt-4">JEE Advanced</a>
                    <a href="" className="pt-4">NEET UG</a>
                    <a href="" className="pt-4">Class 10</a>
                    <a href="" className="pt-4">Class 12</a>
                    <a href="" className="pt-4">Olympiad Exam</a>
                    <a href="" className="pt-4">NEET Online Test Series</a>
                    <a href="" className="pt-4">JEE Online Test Series</a>
                    <a href="" className="pt-4">JEE Main Online Test Series</a>
                    </div>
                </div>
            </div>
            <hr className="border-1.5 mt-10"/>
            <div className="pt-10 flex justify-between">
                <div>ALLEN Career Institute Pvt. Ltd. © manoj.</div>
                <div className="flex gap-x-4">
                    <a href="https://www.linkedin.com/in/manoj-kumar8/"><FaYoutube/></a>
                    <a href="https://www.linkedin.com/in/manoj-kumar8/"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/manoj-kumar8/"><FaSquareFacebook/></a>
                    <a href="https://x.com/manoj_br8"><FaXTwitter/></a>
                    <a href="https://www.linkedin.com/in/manoj-kumar8/"><FaLinkedin/></a>
                </div>

            </div>
        </div>
        </>
    )
}

export default Footer;