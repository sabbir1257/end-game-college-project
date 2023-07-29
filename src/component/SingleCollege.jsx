import React from "react";
import { Link } from "react-router-dom";

const SingleCollege = ({singleData}) => {
    const {collegeImage , collegeName, admissionDates , events , sports, researchHistory } = singleData;
  return (
    <div className="shadow-xl card card-compact w-96 bg-base-100">
      <img
      className="md:h-[250px] rounded-lg"
        src={collegeImage}
        alt="Shoes"
      />
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p>Admission Date: {admissionDates}</p>
        <h1 className="text-2xl font-bold">Events</h1>
        <p>{events}</p>
        <h1 className="text-2xl font-bold">Sports</h1>
        <p>{sports}</p>
        <h1><span className="font-bold text-justify">Research History:</span>{researchHistory}</h1>
        <div className="justify-end card-actions">
        <button className="block w-full p-3 mx-auto my-6 font-semibold text-white duration-300 bg-blue-500 rounded-md hover:bg-blue-500"><Link to="/colleges">View Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
