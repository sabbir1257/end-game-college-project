import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";
import { BsGithub } from "react-icons/bs";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

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

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>College | Login</title>
      </Helmet>
      <div className="w-full max-w-sm p-4 mx-auto my-32 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handelLogin} className="space-y-6">
          <h5 className="text-3xl font-medium text-center text-gray-900 dark:text-white">
            Login
          </h5>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="form-control">
            <div>
              <label
                htmlFor="password"
                className="block mb-2 font-bold text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="absolute transform -translate-y-1/2 bg-transparent border-none outline-none cursor-pointer top-1/2 right-3 focus:outline-none"
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>
            </div>
          </div>
          <input
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            value="Login"
          />
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/singup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
          <div
            onClick={handleGoogleSingIn}
            className="p-[10px] bg-blue-200 cursor-pointer border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]"
          >
            <FcGoogle className="text-[32px]" />
            <span>Continue with Google</span>
          </div>
          <div
            onClick={handleGitHubSingIn}
            className="p-[10px] bg-blue-200 cursor-pointer border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]"
          >
            <BsGithub className="text-[32px]" />
            <span>Continue with GitHub</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
