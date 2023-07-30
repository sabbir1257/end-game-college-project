import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GrHome } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {
  return (
    <div>
      <h1 className="py-4 mx-auto mt-8 text-5xl font-bold text-center text-gray-800">
        Our Contact
      </h1>
      
      <div className="grid justify-center mx-auto md:grid-cols-3 my-7 md:w-[1250px]">
        <div className="mx-auto text-center">
          <GrHome className="mx-auto text-8xl" />
          <p className="text-2xl font-bold">Address:</p>
          <p className="mt-2 text-center">Mirpur-1, Dhaka-1216</p>
        </div>
        <div className="text-center">
          <FiPhoneCall className="mx-auto mt-5 mb-2 text-7xl" />
          <p className="text-2xl font-bold">Phone:</p>
          <p className="mt-2 text-center">+8801995794410</p>
        </div>
        <div className="text-center">
          <HiOutlineMailOpen className="mx-auto text-8xl" />
          <p className="text-2xl font-bold">Email:</p>
          <p className="mt-2 text-center">sabbirsarker364@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
