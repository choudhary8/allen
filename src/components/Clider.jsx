import Testimonial from "./testimonial";


  let i=0;

const Clider=()=>{
    const testimonials=[
        {
            text:"I chose ALLEN Online Programs because I wanted to balance my NEET prep with my school schedule. The program's structure, from daily homework to post-class handouts, was well-organized & my teachers were always available in case I had any doubts.",
            stuName:"Preet",
            stuDesc:"NEET-UG 2024, Score 710/720", 
            stuImg:"https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=128&q=100"
        },
        {
            text:"I chose ALLEN Online Programs lways available in case I had any doubts.",
            stuName:"Preet",
            stuDesc:"NEET-UG 2024, Score 710/720", 
            stuImg:"https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=128&q=100"
        }
    ]

   


    return (
         <>
         <Testimonial testimonials={testimonials}/>
         </>
    )
}
export default Clider;