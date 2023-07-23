import React from "react";

const SingleCollege = ({singleData}) => {
    const {collegeImage , collegeName, admissionDates , fall , spring , events , sports, researchHistory } = singleData;
  return (
    <div className="shadow-xl card card-compact w-96 bg-base-100">
      <img
      className="md:h-[250px] rounded-lg"
        src={collegeImage}
        alt="Shoes"
      />
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p>Admission Date: {fall} to {spring}</p>
        <h1 className="text-2xl font-bold">Events</h1>
        <p>{events}</p>
        <h1 className="text-2xl font-bold">Sports</h1>
        <p>{sports}</p>
        <h1><span className="font-bold">Research History:</span>{researchHistory}</h1>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCollege;
