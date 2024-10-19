import { RiDoubleQuotesL } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    adaptiveHeight: false,
  };
  
const StuTestimonial = ({ testimonials }) => {
  return (
    <>
      <div className=" slider-container w-3/4 m-10 " >
        <Slider {...settings} className="">
          {testimonials.map((testimonial,index) =>  (
              <div key={index} className="w-80 " 
              
              >
                <div className="h-[400px] pt-4 px-8 pb-8 rounded-2xl mt-5 " style={{ backgroundColor: "#1a2439" }}>
                <div className="relative bottom-10 right-4 text-6xl text-[#58b1a6]">
                  <RiDoubleQuotesL />
                </div>
                <div className="h-[315px] flex flex-col justify-between">
                <div className="mb-10">{testimonial.text}</div> 
                 <div className="flex justify-start items-center">
                  <img
                    className="w-14 h-14 rounded-full mr-6"
                    src={testimonial.stuImg}
                    alt="Student image"
                  />
                  <div>
                    <div>{testimonial.stuName}</div>
                    <div>{testimonial.stuDesc}</div>
                  </div>
                </div>
                </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </>
  );
};

export default StuTestimonial;
