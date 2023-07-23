import React from "react";
import Marquee from "react-fast-marquee";
import img2 from "../assets/college-logo/images2.png"
import img3 from "../assets/college-logo/images3.png"
import img4 from "../assets/college-logo/images4.png"
import img6 from "../assets/college-logo/images6.jpeg"
import img7 from "../assets/college-logo/images7.jpeg"
import img8 from "../assets/college-logo/images8.jpeg"
import img10 from "../assets/college-logo/img9.jpg"
import img11 from "../assets/college-logo/img10.jpeg"
import img12 from "../assets/college-logo/images11.png"
import img13 from "../assets/college-logo/images12.jpeg"


const Marque = () => {
  return (
    <Marquee>
     <img className="w-[200px]" src={img2} alt="" />
     <img className="w-[200px]" src={img3} alt="" />
     <img className="w-[200px]" src={img4} alt="" />
     <img className="w-[200px]" src={img6} alt="" />
     <img className="w-[200px]" src={img7} alt="" />
     <img className="w-[200px]" src={img8} alt="" />
     <img className="w-[200px]" src={img10} alt="" />
     <img className="w-[200px]" src={img11} alt="" />
     <img className="w-[150px]" src={img12} alt="" />
     <img className="w-[200px]" src={img13} alt="" />
    </Marquee>
  );
};

export default Marque;
