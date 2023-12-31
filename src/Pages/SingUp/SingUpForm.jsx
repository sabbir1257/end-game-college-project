import React, {  useContext, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUpForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext);
 
  const onSubmit = (data) => {
    setError()
    if (data.password !== data.confirmPassword) {
      setError("Your password did not match");
      return;
    }

    createUser(data.email, data.password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };


  return (
    <form className="m-3 md:m-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="block mb-2 font-bold text-gray-700">Name</span>
        </label>
        <input
          {...register("name", { required: true })}
          type="name"
          name="name"
          placeholder="Name"
          className="input input-bordered"
        />
        {errors.name && <span className="text-red-600">Name is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="block mb-2 font-bold text-gray-700">Email</span>
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          name="email"
          placeholder="email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.email && (
          <span className="text-red-600">Email is required</span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="block mb-2 font-bold text-gray-700">Photo URL</span>
        </label>
        <input
          type="text"
          {...register("photoURL", { required: true })}
          name="photoURL"
          placeholder="Photo URL"
          className="input input-bordered"
        />
        {errors.photoURL && (
          <span className="text-red-600">Photo URL is required</span>
        )}
      </div>

      <div className="gap-6 mt-4 md:flex">
        <div className="md:w-2/4">
          <label htmlFor="password" className="gap-4 text-lg font-bold">
            Password
          </label>
          <div className="relative top-3">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none bottom-3"
            >
              {showPassword ? (
                <HiEyeOff size={20} className="text-gray-500" />
              ) : (
                <HiEye size={20} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <div className="md:w-2/4">
          <label htmlFor="confirmPassword" className="mb-2 text-lg font-bold">
            Confirm Password
          </label>
          <div className="relative top-3">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword",{ required: true })}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          <p className="text-red-600">{error}</p>
            <button
              type="button"
              onClick={handleToggleConfirmPassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none bottom-3"
            >
              {showConfirmPassword ? (
                <HiEyeOff size={20} className="text-gray-500" />
              ) : (
                <HiEye size={20} className="text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="my-4">
        <input
          className="w-full bg-blue-500 btn hover:bg-blue-700 hover:text-white"
          type="submit"
          value="Sing Up"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
