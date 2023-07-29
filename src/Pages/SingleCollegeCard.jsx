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
        <button className="block w-full p-3 mx-auto my-6 font-semibold text-white duration-300 bg-blue-500 rounded-md hover:bg-blue-500"><Link to={`/college-view/${_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
    );
};

export default SingleCollegeCard;