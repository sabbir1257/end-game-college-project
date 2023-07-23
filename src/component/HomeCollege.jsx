import React, { useEffect, useState } from "react";
import SingleCollege from "./SingleCollege";

const HomeCollege = () => {
    const [colleges , setCollege] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/homeCollege")
        .then(res => res.json())
        .then(data => setCollege(data))
    } , [])
    
  return (
    <div>
      <h1 className="py-8 text-5xl font-bold text-center">Our Top Collages</h1>
          <div className="grid gap-4 md:grid-cols-3 max-w-[1250px] mx-auto">
              {
                colleges && colleges.map((singleCollege, index) => <SingleCollege 
                key={index} singleData={singleCollege}
                ></SingleCollege>) 
              }
          </div>
    </div>
  );
};

export default HomeCollege;
