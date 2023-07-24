import React from 'react';
import { Link } from 'react-router-dom';

const SingleCollegeCard = ({singleData}) => {
    const {collegeImage , collegeName, admissionDates , number_of_research , rating , _id } = singleData;

    return (
        <div className="shadow-xl card card-compact w-96 bg-base-100">
      <img
      className="md:h-[200px] rounded-lg"
        src={collegeImage}
        alt="Shoes"
      />
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p>Admission Date: {admissionDates}</p>
        <p>Number Of Research: {number_of_research}</p>
        <p>Rating: {rating}</p>
        <div className="justify-end card-actions">
        <button className="bg-[#05b6d1] block mx-auto my-6 w-full p-3 rounded-md hover:bg-[#0b96ac] duration-300 text-white font-semibold"><Link to={`/college-view/${_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
    );
};

export default SingleCollegeCard;