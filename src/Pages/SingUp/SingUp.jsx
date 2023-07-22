import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link  } from "react-router-dom";
import { Helmet } from "react-helmet";
import SignUpForm from "./SingUpForm";

const SingUp = () => {


  return (
    <>
      <Helmet>
        <title>College | Sing Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-8 mx-auto">
        <div className=" md:w-2/5 md:m-10 h-full bg-base-200 rounded-lg">
          <SignUpForm />
          <div className="mt-4 text-center">
            <button>
              Already have an account?
              <Link to="/login" className="text-lime-500 font-bold">
                Login
              </Link>
            </button>
          </div>
          <div
            className="p-[10px] mb-8 bg-blue-200 cursor-pointer border rounded-lg w-4/5 md:w-2/4  mx-auto flex gap-[6px] mt-[33px]"
          >
            <FcGoogle className="text-[32px]" />
            <span>Continue with Google</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
