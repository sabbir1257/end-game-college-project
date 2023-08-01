import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://server-peach-eta.vercel.app/allCollege")
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []);
  let count = 1;
  return (
    <div className="max-w-[1240px] mx-auto my-10">
      <h1 className="py-4 my-8 text-5xl text-center">Admission</h1>
      <div className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>SL.No</th>
              <th>College Name</th>
              <th>Research</th>
              <th>Admission Date</th>
              <th>Admission Success</th>
            </tr>
          </thead>

          <tbody>
          {data?.map((item, index) => (
            <tr>
              <th>{count++}</th>
              <td>{item?.collegeName}</td>
              <td>{item?.rating}</td>
              <td>{item?.admissionDates}</td>
              <th>
                <Link to="/admitForm">
                <button className="btn btn-outline btn-primary">Apply Now</button>
                </Link>
              </th>
            </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;