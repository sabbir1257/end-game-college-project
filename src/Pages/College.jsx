import React, { useEffect, useState } from "react";
import SingleCollegeCard from "./SingleCollegeCard";

const College = () => {
    const [colleges , setCollege] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/college")
        .then(res => res.json())
        .then(data => setCollege(data))
    } , [])
    
    return (
        <div>
        <h1 className="py-8 text-5xl font-bold text-center">Our All Collage Here</h1>
            <div className="grid gap-4 md:grid-cols-3 max-w-[1250px] mx-auto mb-20">
                {
                  colleges && colleges.map((singleCollege, index) => <SingleCollegeCard 
                  key={index} singleData={singleCollege}
                  ></SingleCollegeCard>) 
                }
            </div>
      </div>
    );
};

export default College;
