import Promo from "./Promo";
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Result } from "postcss";
import Res from "./Res";
import StuTestimonial from "./StuTestimonial";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade:true
};

const Home = () => {
  const testimonials = [
    {
      text: "I chose ALLEN Online Programs because I wanted to balance my NEET prep with my school schedule. The program's structure, from daily homework to post-class handouts, was well-organized & my teachers were always available in case I had any doubts.",
      stuName: "SARTH PATIL",
      stuDesc: "NEET-UG 2024, Score 710/720",
      stuImg:
        "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=128&q=100",
    },
    {
      text: "I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Programs. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score by 100 marks from my previous attempt.",
      stuName: "SEKH GALIB RAZA",
      stuDesc: "NEET-UG 2024, Score 695/720",
      stuImg:
        "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FGalib-128x128_1_ktw4sw.webp&w=128&q=100",
    },
    {
      text: "I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Programs. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!",
      stuName: "AVIK DAS",
      stuDesc: "JEE Adv. 2024, AIR 69",
      stuImg:
        "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FAvik-128x128_vbkt1r.webp&w=128&q=100",
    },
    {
      text: "I came to know about ALLEN’s Online Test Series from my senior in school. The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. They gave me the real feel of the competition & helped me achieve a great score.",
      stuName: "SHIFA FATIMA",
      stuDesc: "NEET-UG 2024, Score 701/720",
      stuImg:
        "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FShifa-128x128_yjuigd.webp&w=128&q=100",
    },
  ];

  const results=[
    {
        pImg:"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953163/oebyukgkusnrgafhi6kh.png?_upload_ref=ic_img_tool",
        program:"JEE(Adv.)",
        achivement:"14 students have made it to the top 500 AIR"
    },
    {
        pImg:"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953193/hbdu8gunuoob1rwhfnyy.png?_upload_ref=ic_img_tool",
        program:"NEET(UG)",
        achivement:"25 students have scored 700+"
    }
  ]

  return (
    <>
      <div className="lg:px-44 px-6 pb-5">
        <Promo cls='hidden lg:block' promoSrc="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944051/e8gk63cgiwlqg4dgtxmi.webp?_upload_ref=ic_img_tool" />
        <Promo cls='lg:hidden' promoSrc="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727943882/finroeji0fnsqkwh0x6y.webp?_upload_ref=ic_img_tool"/>
        
        
        <div className="flex lg:flex-row flex-col items-center">
          <div className="lg:w-1/2 mx-16 flex justify-center lg:justify-start">
            <div>
              <h2 className="pt-8 md:pb-10 text-2xl md:text-4xl font-bold">
                <div>Your Dream.</div>
                <div>Our Expertise.</div>
              </h2>
              <div className="pt-6 text-xl font-medium">
                What brings you to us here?
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="border-2 border-blue-500 px-5 py-2 rounded-full" href="">NEET</a>
                <a className="border-2 border-blue-500 px-5 py-2 rounded-full" href="">JEE</a>
                <a className="border-2 border-blue-500 px-5 py-2 rounded-full" href="">Grade 6-10</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-3/4 w-full silder-container md:px-16 p-6">
          <Slider {...settings} className="w-contain">
            <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_1_aorh14.webp&w=828&q=75" alt="" />
            <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310904%2Fc_2_ix0igr.webp&w=828&q=75" alt="" />
            <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310904%2Fc_3_qurxw1.webp&w=828&q=75" alt="" />
            <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_4_olon7a.webp&w=828&q=75" alt="" />
          </Slider>

          </div>
        </div>

        <div className="py-12 slider-container mt-8 m-4">
          <Slider {...settings} className="flex justify-center lg:p-5 w-full">
            <a href="">
              <img
                className="lg:rounded-3xl rounded-lg w-full"
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944261/w6oi3seuvlmsggphhpxi.webp?_upload_ref=ic_img_tool"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="lg:rounded-3xl rounded-lg w-full"
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1024,f_auto,q_auto/v1728295471/gbvvlbtgpsecq57ivwff.png?_upload_ref=ic_img_tool"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="lg:rounded-3xl rounded-lg w-full"
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="lg:rounded-3xl rounded-lg w-full"
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944598/wr9qyk4gyqgnntgonfvy.webp?_upload_ref=ic_img_tool"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="lg:rounded-3xl rounded-lg w-full"
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944619/v6cgvy44tde2yjq4yguo.webp?_upload_ref=ic_img_tool"
                alt=""
              />
            </a>
          </Slider>
        </div>


        <div className="py-12 m-4">
            <div className="flex justify-center mb-16 font-bold text-2xl md:text-5xl">Our remarkable results in 2024</div>
            <div className="slider-container z-1">
                <Slider {...settings}>
                    {
                        results.map((result,index)=>(
                            <Res key={index} pImg={result.pImg} program={result.program} achievment={result.achivement}/>
                        ))
                    }
                </Slider>
            </div>
        </div>

        <div className="py-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium">
              Discover the perfect online program
            </h2>
          </div>
          <ul className="flex lg:flex-row flex-col items-center gap-8 pt-6">
            <li
              style={{ backgroundColor: "#1a2439" }}
              className="rounded-2xl bg-[url('https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp')] h-60 w-80 bg-contain"
            >
              <a
                href=""
                className="w-full h-full p-6 w-full h-full flex flex-col justify-between"
              >
                <div className="font-medium text-xl md:text-2xl">JEE</div>
                <div className="text-base text-blue-500 flex items-center text-blue-500 gap-2 text-lg font-semibold">
                  View
                  <FaArrowRight />
                </div>
              </a>
            </li>
            <li
              style={{ backgroundColor: "#1a2439" }}
              className="rounded-2xl bg-[url('https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp')] h-60 w-80 bg-contain"
            >
              <a
                href=""
                className="w-full h-full p-6 w-full h-full flex flex-col justify-between"
              >
                <div className="font-medium text-xl md:text-2xl">NEET</div>
                <div className="text-base text-blue-500 flex items-center text-blue-500 gap-2 text-lg font-semibold">
                  View
                  <FaArrowRight />
                </div>
              </a>
            </li>
            <li
              style={{ backgroundColor: "#1a2439" }}
              className="rounded-2xl bg-contain  h-60 w-80 bg-[url('https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp')]"
            >
              <a
                href=""
                className="w-full h-full p-6 w-full h-full flex flex-col justify-between"
              >
                <div className="font-medium text-xl md:text-2xl">Grade 6-10</div>
                <div className="text-base text-blue-500 flex items-center text-blue-500 gap-2 text-lg font-semibold">
                  View
                  <FaArrowRight />
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="py-12 lg:flex justify-between">
          <div className="lg:w-1/4 flex flex-col justify-center">
            <div className="text-[#58b1a6] font-medium pb-6 hidden lg:block">TESTIMONIALS</div>
            <div className="font-medium text-3xl lg:pb-14">
              Here's what students are saying
            </div>
          </div>
          <StuTestimonial testimonials={testimonials} />
        </div>

        <div>
          <div>
            <h2 className=" text-2xl md:text-3xl font-medium">
              Looking for a classroom based program?
            </h2>
          </div>

          <div
            className="md:flex mt-6 pt-2 pl-10 pr-10 rounded-3xl"
            style={{ backgroundColor: "#1a2439" }}
          >
            <div className="md:w-1/2 pt-12 pb-4 flex flex-col items-center md:items-start">
              <div className="text-xl md:text-2xl font-normal">
                Present in 53 cities with
              </div>
              <div className="text-xl md:text-2xl font-normal mb-12">250+ calssrooms</div>
              <button className="lg:w-36 px-4 py-2 m-1 bg-white text-black rounded-full">
                Find a center
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                className=""
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707820846/Updated_size_classroom_ck4yjp.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="py-12">
          <img
            className="w-full object-contain"
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729086658/download_app_dark_hae6bf.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
