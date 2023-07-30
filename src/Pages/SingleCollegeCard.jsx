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
        <button className="rounded-md btn btn-primary"><Link to={`/viewCollege/${_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
    );
};

export default SingleCollegeCard;