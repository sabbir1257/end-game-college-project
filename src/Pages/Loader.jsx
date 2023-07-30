import React from "react";
import { Oval, RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
     <Oval
        height={80}
        width={80}
        color="rgb(87,13,248)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgb(87,13,248)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
