import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link  } from "react-router-dom";
import { Helmet } from "react-helmet";
import SignUpForm from "./SingUpForm";
import { BsGithub } from "react-icons/bs";

const SingUp = () => {
  const handleGitHubSingIn = () => {
    signInWithPopup(auth , gitHubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
        console.log(error);
    })
  }

  return (
    <>
      <Helmet>
        <title>College | Sing Up</title>
      </Helmet>
      <div className="flex-col mx-auto hero-content lg:flex-row-reverse md:gap-8">
        <div className="h-full rounded-lg md:w-2/5 md:m-10 bg-base-200">
          <SignUpForm />
          <div className="mt-4 text-center">
            <button>
              Already have an account?
              <Link to="/login" className="font-bold text-blue-500">
                Login
              </Link>
            </button>
          </div>
          <div
            className="p-[10px] mb-8 bg-blue-200 cursor-pointer border rounded-lg w-4/5 md:w-2/4  mx-auto flex gap-[6px] mt-[30px]">
            <FcGoogle className="text-[32px]" />
            <span>Continue with Google</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
