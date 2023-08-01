import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(`https://server-peach-eta.vercel.app/myCollege?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
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
              <th>Email</th>
              <th>Subject</th>
              <th>Phone No.</th>
              <th>Date Of Birth</th>
              <th>Address</th>
              <th>Admission Process</th>
            </tr>
          </thead>

          <tbody>
            {colleges.map((college, index) => (
              <>
                <tr className="mb-6 text-center">
                  <td>{count++}</td>
                  <td>{college.name}</td>
                  <td>{college.email}</td>
                  <td>{college.subject}</td>
                  <td>{college.phone}</td>
                  <td>{college.dateOfBirth}</td>
                  <td>{college.address}</td>
                  <td>
                    <button className="btn btn-outline btn-primary">
                      <Link to="/success">Feedback</Link>
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCollege;

